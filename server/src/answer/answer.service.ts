import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateAnswerDto, PatchAnswerToRightDto } from './dto/answer.dto';
import { TaskService } from '../task/task.service';
import { TeamService } from '../team/team.service';
import { Types } from 'mongoose';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(AnswerModel)
    private readonly answerModel: ModelType<AnswerModel>,
    private readonly taskService: TaskService,
    private readonly teamService: TeamService,
  ) {}

  async getAllAnswers(): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find().exec();
  }

  async getAnswersByTeamAndTask(
    teamId: string | Types.ObjectId,
    taskId: string | Types.ObjectId,
  ): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find({ teamId, taskId }).exec();
  }

  async createAndCheckAnswer(dto: CreateAnswerDto) {
    const { teamId, taskId, answer } = dto;
    const team = await this.teamService.findTeamById(teamId);
    const task = await this.taskService.findTaskById(taskId);

    const { _id } = await this.answerModel.create(dto);

    if (task.address.includes(answer) || task.codeAnswer.includes(answer)) {
      await this.editAnswerToRight(_id, { right: true });
    }

    if (task.codeAnswer.includes(answer)) {
      await this.teamService.increaseTeamProgress(teamId, {
        progressInGame: team.progressInGame + 1,
      });
    }

    return {
      answers: await this.getAnswersByTeamAndTask(teamId, taskId),
      team: await this.teamService.findTeamById(teamId),
    };
  }

  async editAnswerToRight(id: Types.ObjectId, dto: PatchAnswerToRightDto) {
    return this.answerModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async deleteAllAnswers() {
    return this.answerModel.deleteMany().exec();
  }
}
