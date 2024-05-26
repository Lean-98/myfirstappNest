import { Module } from '@nestjs/common';
import {TasksModules} from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TasksModules, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
