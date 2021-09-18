import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './module/api/api.module';
import { UserModule } from './module/user/user.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [ApiModule, UserModule, DefaultModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
