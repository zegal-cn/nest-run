import { Module } from "@nestjs/common";
// import { DatabaseModule } from './database/database.module';
import { UserModule } from "./user/user.module";
import { ProjectModule } from "./project/project.module";

@Module({
  modules: [UserModule, ProjectModule],
})
export class ApplicationModule {}
