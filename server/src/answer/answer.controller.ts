import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto, PatchAnswerToRightDto } from './dto/answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  async getAllAnswers() {
    return this.answerService.getAllAnswers();
  }

  @Get('/abt')
  async getAnswersByTeam(
    @Query('team') team: string,
    @Query('task') task: string,
  ) {
    return this.answerService.getAnswersByTeamAndTask(team, task);
  }

  @Post()
  async createNewAnswer(@Body() dto: CreateAnswerDto) {
    return this.answerService.createAnswer(dto);
  }

  @Patch(':id')
  async patchAnswer(
    @Param('id') id: string,
    @Body() dto: PatchAnswerToRightDto,
  ) {
    return this.answerService.editAnswerToRight(id, dto);
  }

  @Delete()
  async deleteAllAnswers() {
    return this.answerService.deleteAllAnswers();
  }
}
