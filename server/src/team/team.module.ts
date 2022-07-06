import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TeamController } from './team.controller';
import { TeamModel } from './team.model';
import { TeamService } from './team.service';
import { AnswerModel } from '../answer/answer.model';
import { AnswerService } from '../answer/answer.service';
import { TaskService } from '../task/task.service';
import { TaskModel } from '../task/task.model';

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
      {
        typegooseClass: TaskModel,
        schemaOptions: {
          collection: 'TaskInGame',
        },
      },
    ]),
  ],
  providers: [TeamService, AnswerService, TaskService],
})
export class TeamModule {}
