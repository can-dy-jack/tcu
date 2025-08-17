import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { createClickableLink } from './utils';

async function bootstrap() {
  const port = config().parsed?.PROT || process.env.PORT || 3000;
  console.log(
    'Server will start on: ',
    createClickableLink(`localhost:${port}`),
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();



