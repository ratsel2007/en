import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto, PatchTaskDto } from './dto/task.dto';
import { TASK_NOT_FOUND } from './task.constants';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const currentTask = await this.taskService.findByTaskId(id);

    if (!currentTask) {
      throw new NotFoundException(TASK_NOT_FOUND);
    }

    return currentTask;
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  async patchTask(@Param('id') id: string, @Body() dto: PatchTaskDto) {
    const updatedTask = await this.taskService.patch(id, dto);

    if (!updatedTask) {
      throw new NotFoundException(TASK_NOT_FOUND);
    }

    return updatedTask;
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    const deletedTask = await this.taskService.delete(id);

    if (!deletedTask) {
      throw new HttpException(TASK_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return deletedTask;
  }

  @Delete()
  async deleteAllTasks() {
    return this.taskService.deleteAllTasks();
  }
}
