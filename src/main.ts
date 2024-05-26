import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './cors.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
