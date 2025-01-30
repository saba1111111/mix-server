import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('proces enf', process.env.NODE_ENV);
  await app.listen(8080);
}
bootstrap();
