import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TeamModel } from './team.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTeamDto } from './dto/team.dto';
import { AnswerService } from '../answer/answer.service';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(TeamModel)
    private readonly teamModel: ModelType<TeamModel>,
    private readonly answerService: AnswerService,
  ) {}

  async getAllTeams(): Promise<DocumentType<TeamModel>[]> {
    return this.teamModel.find().exec();
  }

  async getTeamById(id: string): Promise<DocumentType<TeamModel>> {
    return this.teamModel.findById(id).exec();
  }

  async createTeam(dto: CreateTeamDto): Promise<DocumentType<TeamModel>> {
    return this.teamModel.create(dto);
  }

  async findTeamByTitle(title: string) {
    console.log(title);
    // return this.teamModel.findOne({ title }).exec();
  }

  async increaseTeamProgress({ teamId, answerId, answer }) {
    const team = await this.getTeamById(teamId);

    const correctAnswer = await this.answerService.checkAnswer(
      answerId,
      answer,
    );

    if (correctAnswer) {
      team.progressInGame++;
    }

    return { team, correctAnswer };
  }
}