import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TeamModel } from './team.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTeamDto, IncreaseTeamProgressDto } from './dto/team.dto';
import { Types } from 'mongoose';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(TeamModel)
    private readonly teamModel: ModelType<TeamModel>, // private readonly answerService: AnswerService,
  ) {}

  async getAllTeams(): Promise<DocumentType<TeamModel>[]> {
    return this.teamModel.find().exec();
  }

  async createTeam(dto: CreateTeamDto): Promise<DocumentType<TeamModel>> {
    return this.teamModel.create(dto);
  }

  async findTeamByTitle(stuffTitle: string) {
    return this.teamModel.findOne({ stuffTitle }).exec();
  }

  async findTeamById(id: string | Types.ObjectId) {
    return this.teamModel.findById(id).exec();
  }

  async patchTeam(teamId: Types.ObjectId, dto) {
    return this.teamModel.findByIdAndUpdate(teamId, dto, { new: true });
  }

  async increaseTeamProgress(id: Types.ObjectId, dto: IncreaseTeamProgressDto) {
    return this.teamModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async allTeamsProgressToNull() {
    return this.teamModel.updateMany({ $set: { progressInGame: 0 } });
  }

  async removeTeams() {
    return this.teamModel.deleteMany();
  }
}
