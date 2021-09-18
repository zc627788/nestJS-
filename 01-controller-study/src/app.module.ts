import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NewController } from './new/new.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewController],
  providers: [AppService],
})
export class AppModule {}
