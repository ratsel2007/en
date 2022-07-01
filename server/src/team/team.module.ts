import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TeamController } from './team.controller';
import { TeamModel } from './team.model';
import { TeamService } from './team.service';
import { AnswerModel } from '../answer/answer.model';
import { AnswerService } from '../answer/answer.service';

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
      {
        typegooseClass: AnswerModel,
        schemaOptions: {
          collection: 'Answer',
        },
      },
    ]),
  ],
  providers: [TeamService, AnswerService],
})
export class TeamModule {}
