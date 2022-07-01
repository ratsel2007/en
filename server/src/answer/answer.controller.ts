import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto, PatchAnswerToRightDto } from './dto/answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  async getAllAnswers() {
    return this.answerService.getAllAnswers();
  }

  @Get('/team')
  async getAnswersByTeam(@Body() team: string) {
    return this.answerService.getAnswersByTeam(team);
  }

  @Post()
  async createNewAnswer(@Body() dto: CreateAnswerDto) {
    return this.answerService.createAnswer(dto);
  }

  @Patch()
  async patchAnswer(@Body() id: string, dto: PatchAnswerToRightDto) {
    return this.answerService.editAnswerToRight(id, dto);
  }
}
