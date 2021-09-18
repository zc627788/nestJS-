import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置session的中间件
  app.use(
    session({
      secret: 'jackson',
      cookie: { maxAge: 9000, httpOnly: true },
      rolling: true, //rolling: 是否按照原设定的 maxAge 值重设 session 同步到 cookie 中，要保证 session 有操作的时候必须设置这个属性为true。
    }),
  );
  await app.listen(3000);
}
bootstrap();
