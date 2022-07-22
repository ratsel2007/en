import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';
import { TaskService } from '../task/task.service';
import { TaskModel } from '../task/task.model';
import { TeamModel } from '../team/team.model';
import { TeamService } from '../team/team.service';

@Module({
  controllers: [AnswerController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AnswerModel,
        schemaOptions: {
          collection: 'Answer',
        },
      },
      TeamModel,
      TaskModel,
    ]),
  ],
  providers: [AnswerService, TaskService, TeamService],
})
export class AnswerModule {}
