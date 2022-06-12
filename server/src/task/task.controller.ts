import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TASK_NOT_FOUND } from './task.constants';
import { TaskModel } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    this.taskService.getAll();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    await this.taskService.findByTaskId(id);
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDto) {
    await this.taskService.create(dto);
  }

  @Patch(':id')
  async patchTask(@Param('id') id: string, @Body() dto: TaskModel) {}

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    const deletedTask = await this.taskService.delete(id);

    if (!deletedTask) {
      throw new HttpException(TASK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
