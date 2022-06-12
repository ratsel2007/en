import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeamModel } from './team.model';

@Controller('team')
export class TeamController {
  @Get()
  async getAllTeams() {}

  @Get(':id')
  async getTeamById(@Param('id') id: string) {}

  @Post('create')
  async createTeam(@Body() dto: Omit<TeamModel, '_id'>) {}
}
