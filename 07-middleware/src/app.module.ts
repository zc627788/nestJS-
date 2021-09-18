import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMiddleware } from './user.middleware';
import { InitMiddleware } from './init.middleware';
import { functionMiddle } from './function-middle.middleware';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware, InitMiddleware, functionMiddle)
      .forRoutes({ path: '/', method: RequestMethod.ALL });
  }
}
