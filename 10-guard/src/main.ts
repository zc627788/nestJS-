import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './guard/auth.guard';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 10000, httpOnly: true },
      rolling: true,
    }),
  );
  //全局配置守卫
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
