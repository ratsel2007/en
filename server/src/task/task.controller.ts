import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskModel } from './task.model';

@Controller('task')
export class TaskController {
  @Get()
  async getAllTasks() {}

  @Get(':id')
  async getTaskById(@Param('id') id: string) {}

  @Post('create')
  async createTask(@Body() dto: Omit<TaskModel, '_id'>) {}

  @Patch(':id')
  async patchTask(@Param('id') id: string, @Body() dto: TaskModel) {}

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {}
}
