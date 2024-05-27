import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
  // Inyección de dependencias
  constructor(private tasksService: TasksService) {}

  @Get('')
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post('')
  createTask() {
    return this.tasksService.createTask();
  }

  @Put('')
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete('/id')
  deleteTask() {
    return this.tasksService.deletedTask();
  }

  @Patch('')
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
