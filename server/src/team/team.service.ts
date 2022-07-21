import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TeamModel } from './team.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTeamDto } from './dto/team.dto';
import { AnswerService } from '../answer/answer.service';
import { Types } from 'mongoose';
import { CreateAnswerDto } from '../answer/dto/answer.dto';

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

  async findTeamByTitle(stuffTitle: string) {
    return this.teamModel.findOne({ stuffTitle }).exec();
  }

  async patchTeam(teamId: Types.ObjectId, dto) {
    return this.teamModel.findByIdAndUpdate(teamId, dto, { new: true });
  }

  async increaseTeamProgress(answerDto: CreateAnswerDto) {
    const { answer, teamTitle, taskId } = answerDto;

    const team = await this.findTeamByTitle(teamTitle);

    const { rightVersion, increaseProgress } =
      await this.answerService.checkAnswer(taskId, answer);

    const patchTeamData = {
      ...team,
      [team.progressInGame]: team.progressInGame++,
    };

    if (increaseProgress) {
      await this.patchTeam(team._id, patchTeamData);
    }

    return { team, rightVersion, increaseProgress, taskId };
  }

  async allTeamsProgressToNull() {
    return this.teamModel.updateMany({ $set: { progressInGame: 0 } });
  }

  async removeTeams() {
    return this.teamModel.deleteMany();
  }
}
