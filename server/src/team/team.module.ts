import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TeamController } from './team.controller';
import { TeamModel } from './team.model';

@Module({
  controllers: [TeamController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TeamModel,
        schemaOptions: {
          collection: 'Team',
        },
      },
    ]),
  ],
})
export class TeamModule {}
