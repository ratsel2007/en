import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TaskController } from './task.controller';
import { TaskModel } from './task.model';

@Module({
  controllers: [TaskController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TaskModel,
        schemaOptions: {
          collection: 'Task',
        },
      },
    ]),
  ],
})
export class TaskModule {}
