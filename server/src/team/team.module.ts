import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';

@Module({})
export class TeamModule {
  controllers: [TeamController];
}
