import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGameDto, PatchGameDto } from './dto/create-game.dto';
import { GameService } from './game.service';
import { GAME_NOT_FOUND } from './game.constants';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGame() {
    return this.gameService.getGame();
  }

  @Post()
  async createGame(@Body() dto: CreateGameDto) {
    return this.gameService.createGame(dto);
  }

  @Patch(':id')
  async patchGame(@Param('id') id: string, @Body() dto: PatchGameDto) {
    const updatedGame = await this.gameService.patchGame(id, dto);

    if (!updatedGame) {
      throw new NotFoundException(GAME_NOT_FOUND);
    }

    return updatedGame;
  }

  @Delete()
  async deleteAllGames() {
    return this.gameService.deleteAllGames();
  }
}
