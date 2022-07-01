import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { CreateAnswerDto, PatchAnswerToRightDto } from './dto/answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(AnswerModel)
    private readonly answerModel: ModelType<AnswerModel>,
  ) {}

  async getAllAnswers(): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find().exec();
  }

  async getAnswersByTeam(team: string): Promise<DocumentType<AnswerModel>[]> {
    return this.answerModel.find({ team }).exec();
  }

  async createAnswer(dto: CreateAnswerDto): Promise<DocumentType<AnswerModel>> {
    return this.answerModel.create(dto);
  }

  async findAnswerById(id: string): Promise<DocumentType<AnswerModel>> {
    return this.answerModel.findById(id);
  }

  async checkAnswer(id: string, answer: string) {
    const candidateAnswer = await this.findAnswerById(id);

    return candidateAnswer.answer === answer;
  }

  async editAnswerToRight(id: string, dto: PatchAnswerToRightDto) {
    return this.answerModel.findByIdAndUpdate(id, dto);
  }
}
