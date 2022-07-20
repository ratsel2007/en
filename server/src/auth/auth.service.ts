import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, genSalt, hash } from 'bcryptjs';
import { USER_NOT_FOUND, PASSWORD_WRONG, WRONG_TOKEN } from './auth.constants';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { ReLoginDto } from './dto/relogin.dto';
import { TeamModel } from '../team/team.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: ModelType<UserModel>,
    private readonly jwtService: JwtService,
  ) {}

  async getAllUsers() {
    const users: (UserModel & { team: TeamModel })[] = await this.userModel
      .aggregate([
        { $match: {} },
        {
          $lookup: {
            from: 'Team',
            localField: 'teamId',
            foreignField: '_id',
            as: 'team',
          },
        },
        { $unwind: '$team' },
      ])
      .exec();

    return users;
  }

  async createUser(dto: RegisterDto) {
    const salt = await genSalt(10);
    const newUser = new this.userModel({
      email: dto.email,
      password: await hash(dto.password, salt),
      name: dto.name,
      author: dto.author,
      teamId: dto.teamId,
    });
    return newUser.save();
  }

  async deleteAllUsers() {
    return this.userModel.deleteMany({});
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND);
    }

    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(PASSWORD_WRONG);
    }

    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    const user: UserModel & { team: TeamModel } = await this.userModel
      .aggregate([
        { $match: { email } },
        {
          $lookup: {
            from: 'Team',
            localField: 'teamId',
            foreignField: '_id',
            as: 'team',
          },
        },
        { $unwind: '$team' },
      ])
      .exec()
      .then((items) => items[0]);

    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }

  async reLogin({ token }: ReLoginDto) {
    try {
      const user = await this.jwtService.verifyAsync(token);
      const { email } = user;
      return this.userModel
        .aggregate([
          { $match: { email } },
          {
            $lookup: {
              from: 'Team',
              localField: 'teamId',
              foreignField: '_id',
              as: 'team',
            },
          },
          { $unwind: '$team' },
        ])
        .exec()
        .then((items) => items[0]);
    } catch (e) {
      throw new UnauthorizedException(WRONG_TOKEN);
    }
  }
}
