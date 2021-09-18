import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserSecondController } from './user-second/user-second.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, UserSecondController],
  providers: [AppService],
})
export class AppModule {}
