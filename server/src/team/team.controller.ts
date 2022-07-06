import {
  Body,
  Controller,
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

  @Get('')
  async getTeamByTitle(@Query() title: string) {
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
    @Body() data: { teamId: string; answerId: string; answer: string },
  ) {
    return this.teamService.increaseTeamProgress(data);
  }
}
