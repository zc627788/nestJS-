import { Module } from '@nestjs/common';
import { DefaultController } from './default.controller';
import { DefaultService } from './default.service';
import { ShareModule } from '../share/share.module';
import { ShareService } from '../share/share.service';
// 模块是具有 @Module() 装饰器的类。 @Module() 装饰器提供了元数据，Nest 用它来组织应用 程序结构。
@Module({
  imports: [ShareModule],
  controllers: [DefaultController],
  providers: [DefaultService, ShareService],
})
export class DefaultModule {}
