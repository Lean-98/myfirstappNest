import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('projects')
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
