import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TeamModel } from './team.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTeamDto } from './dto/team.dto';
import { AnswerService } from '../answer/answer.service';
import { Types } from 'mongoose';

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

  async createTeam(dto: CreateTeamDto): Promise<DocumentType<TeamModel>> {
    return this.teamModel.create(dto);
  }

  async findTeamByTitle(title: string) {
    return this.teamModel.find({ title }).exec();
  }

  async patchTeam(teamId: Types.ObjectId, dto) {
    return this.teamModel.findByIdAndUpdate(teamId, dto, { new: true });
  }

  async increaseTeamProgress({ teamTitle, taskId, answer }) {
    const team = await this.findTeamByTitle(teamTitle);

    const { rightVersion, increaseProgress } =
      await this.answerService.checkAnswer(taskId, answer);

    const patchTeamData = {
      ...team[0],
      [team[0].progressInGame]: team[0].progressInGame++,
    };

    if (increaseProgress) {
      await this.patchTeam(team[0]._id, patchTeamData);
    }

    return { team, rightVersion };
  }
}
