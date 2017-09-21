import { createConnection } from "typeorm";

export const databaseProviders = [
  {
    provide: "DbConnectionToken",
    useFactory: async () => {
      const connection = await createConnection({
        type: "sqlite",
        database: "./dist/development.sqlite3",
        entities: ["./**/*.entity.ts"],
        // entitySchemas: [
        //   __dirname + "./schema/*.json",
        // ],
        // migrations: [
        //   __dirname + "./migration/*{.js,.ts}"
        // ],
        // cli: {
        //   migrationsDir: __dirname + "/migration"
        // },
        synchronize: true,
      });
      return connection;
    },
  },
];
