import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/team.dto';
import { TeamService } from './team.service';
import { TEAM_NOT_FOUND } from './team.constats';
import { Types } from 'mongoose';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Get(':id')
  async getTeamById(@Param('id') id: string | Types.ObjectId) {
    return this.teamService.findTeamById(id);
  }

  @Get('/c')
  async getTeamByTitle(@Query() teamTitle) {
    const { title } = teamTitle;

    const team = await this.teamService.findTeamByTitle(title);

    if (!team) {
      throw new NotFoundException(TEAM_NOT_FOUND);
    }

    return team;
  }

  @Get(':id/ctp')
  async getNewTeamProgress(
    @Param('id') id: Types.ObjectId | string,
    @Query() progress,
  ) {
    return this.teamService.checkTeamProgress(id, progress);
  }

  @Post()
  async createTeam(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }

  @Patch('/teams-to-null')
  async decreaseAllTeamsProgressToNull() {
    return this.teamService.allTeamsProgressToNull();
  }

  @Delete()
  async removeAllTeams() {
    return this.teamService.removeTeams();
  }
}
