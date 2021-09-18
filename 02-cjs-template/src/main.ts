import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public'); //配置静态资源目录
  // res:// http://localhost:3000/images.jpg
  // 图片

  // ================================================

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/', //设置虚拟路径
  });
  // res:// http://localhost:3000/static/images.jpg
  // 图片

  // ================================================
  // 配置模板引擎
  app.setBaseViewsDir(join(__dirname, '..', 'template')); //放视图的文件;
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
