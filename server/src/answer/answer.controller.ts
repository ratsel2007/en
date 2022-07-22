import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/answer.dto';
import { Types } from 'mongoose';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  async getAllAnswers() {
    return this.answerService.getAllAnswers();
  }

  @Get('/abt')
  async getAnswersByTeamAndTask(
    @Query('team') team: string | Types.ObjectId,
    @Query('task') task: string | Types.ObjectId,
  ) {
    return this.answerService.getAnswersByTeamAndTask(team, task);
  }

  @Post()
  async createNewAnswer(@Body() dto: CreateAnswerDto) {
    return this.answerService.createAndCheckAnswer(dto);
  }

  @Delete()
  async deleteAllAnswers() {
    return this.answerService.deleteAllAnswers();
  }
}
