import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Component()
export class ProjectService {
  constructor(
    @Inject('UserRepositoryToken') private userRepository: Repository<Project>) { }
}
