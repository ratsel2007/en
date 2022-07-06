import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';
import { TaskService } from '../task/task.service';
import { TaskModel } from '../task/task.model';

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
      {
        typegooseClass: TaskModel,
        schemaOptions: {
          collection: 'TaskInGame',
        },
      },
    ]),
  ],
  providers: [AnswerService, TaskService],
})
export class AnswerModule {}
