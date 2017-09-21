// import * as bodyParser from 'body-parser';
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  // app.use(bodyParser.json());
  console.log("Server started and listen on 3000...");
  await app.listen(3000);
}
bootstrap();
