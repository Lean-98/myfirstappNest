import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  // Inyección de dependencias
  constructor(private projectsService: ProjectsService) {}

  @Get('')
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Post('')
  createdNewProject() {
    return this.projectsService.createProject();
  }

  @Put('')
  updateProject() {
    return this.projectsService.updateProject();
  }

  @Patch('')
  updateStatusProject() {
    return this.projectsService.updateStatusProject();
  }

  @Delete('')
  deleteProjectById() {
    return this.projectsService.deleteProject();
  }
}
