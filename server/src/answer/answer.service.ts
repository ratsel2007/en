import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateAnswerDto, PatchAnswerToRightDto } from './dto/answer.dto';
import { TaskService } from '../task/task.service';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(AnswerModel)
    private readonly answerModel: ModelType<AnswerModel>,
    private readonly taskService: TaskService,
  ) {}

  async getAllAnswers(): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find().exec();
  }

  async getAnswersByTeamAndTask(
    teamTitle: string,
    taskId: string,
  ): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find({ teamTitle, taskId }).exec();
  }

  async createAnswer(dto: CreateAnswerDto): Promise<DocumentType<AnswerModel>> {
    return this.answerModel.create(dto);
  }

  async findAnswerById(id: string): Promise<DocumentType<AnswerModel>> {
    return this.answerModel.findById(id);
  }

  async checkAnswer(taskId: string, answer: string) {
    const task = await this.taskService.findByTaskId(taskId);

    let rightVersion = false;
    let increaseProgress = false;

    if (task.address.includes(answer)) {
      rightVersion = true;
      await this.editAnswerToRight(taskId, { right: true });
    }

    if (task.codeAnswer.includes(answer)) {
      rightVersion = true;
      increaseProgress = true;
    }

    return {
      rightVersion,
      increaseProgress,
    };
  }

  async editAnswerToRight(id: string, dto: PatchAnswerToRightDto) {
    return this.answerModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async deleteAllAnswers() {
    return this.answerModel.deleteMany().exec();
  }
}
