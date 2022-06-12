import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameModel } from './game.model';

@Controller('game')
export class GameController {
  @Get()
  async getGame() {}

  @Post()
  async createGame(@Body() dto: Omit<GameModel, '_id'>) {}
}
