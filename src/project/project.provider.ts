import { Connection, Repository } from "typeorm";
import { Project } from "./project.entity";

export const projectProviders = [
  {
    provide: "UserRepositoryToken",
    useFactory: (connection: Connection) => connection.getRepository(Project),
    inject: ["DbConnectionToken"],
  },
];
