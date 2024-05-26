import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  createTask() {
    return 'Create Task';
  }

  updateTask() {
    return 'Updating Task';
  }

  deletedTask() {
    return 'Deleted Task';
  }

  updateTaskStatus() {
    return 'Updating status Task';
  }
}
