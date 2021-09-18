import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 控制器的目的是接收应用的特定请求。路由机制控制哪个控制器接收哪些请求。通常， 每个控制器有多个路由，不同的路由可以执行不同的操作。
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
