import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { TaskModel } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskModel) private readonly taskModel: ModelType<TaskModel>,
  ) {}

  async getAll(): Promise<DocumentType<TaskModel>[]> {
    return this.taskModel.find().exec();
  }

  async create(dto: CreateTaskDto): Promise<DocumentType<TaskModel>> {
    return this.taskModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<TaskModel> | null> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }

  async findByTaskId(taskId: string): Promise<DocumentType<TaskModel>> {
    return this.taskModel.findById(taskId).exec();
  }
}
