import { Controller, Get, Param } from '@nestjs/common';

@Controller('player')
export class PlayerController {
  @Get()
  async getAllPlayers() {}

  @Get(':id')
  async getPlayerById(@Param('id') id: string) {}
}
