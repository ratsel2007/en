import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/team.dto';
import { TeamService } from './team.service';
import { TEAM_NOT_FOUND } from './team.constats';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getAllTeams() {
    return this.teamService.getAllTeams();
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

  @Post()
  async createTeam(@Body() dto: CreateTeamDto) {
    return this.teamService.createTeam(dto);
  }

  @Patch()
  async checkTeamProgress(
    @Body() data: { teamTitle: string; taskId: string; answer: string },
  ) {
    return this.teamService.increaseTeamProgress(data);
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
