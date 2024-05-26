import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [
    {
      id: 1,
      name: 'Project 01',
      status: 'Completed',
      category: 'IT',
    },
    {
      id: 2,
      name: 'Project 02',
      status: 'Incomplete',
      category: 'Backend',
    },
    {
      id: 3,
      name: 'Project 03',
      status: 'Postponed',
      category: 'DevOps',
    },
  ];

  getAllProjects() {
    return this.projects;
  }

  createProject() {
    return 'Created new project';
  }

  updateProject() {
    return 'Updated project by id';
  }

  deleteProject() {
    return 'Deleted project by id';
  }

  updateStatusProject() {
    return 'Updated status project';
  }
}
