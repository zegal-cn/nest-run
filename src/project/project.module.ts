import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { projectProviders } from './project.provider';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  modules: [
    DatabaseModule,
  ],
  components: [
    ...projectProviders,
    ProjectService,
  ],
  controllers: [
    ProjectController,
  ],
})
export class ProjectModule { }
