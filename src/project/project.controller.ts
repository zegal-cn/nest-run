import { Controller, Get } from "@nestjs/common";

@Controller("projects")
export class ProjectController {
  @Get()
  findAll() {
    return [];
  }

  @Get()
  find() {
    return [];
  }
}
