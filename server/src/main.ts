import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  const port = config().parsed?.PROT || process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap()
  .then(() => {
    console.log('Server is running...');
  })
  .catch((error) => {
    console.error('Error starting the server:', error);
  });
