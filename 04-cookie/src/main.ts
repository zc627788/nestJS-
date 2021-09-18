import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //未加密配置cookie中间件
  // app.use(cookieParser());
  // 加密cookie中间件
  app.use(cookieParser('signed cookies'));

  await app.listen(3000);
}

bootstrap();
