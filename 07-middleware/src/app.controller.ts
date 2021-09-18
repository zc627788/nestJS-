import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// 中间件就是匹配路由之前或者匹配路由完成做的一系列的操作。中间件中如果想往下 匹配的话，那么需要写 next()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //res
  // user :>>  user
  // init2 :>>  init2
  // 函数式中间件...
  // user :>>  user
  // init2 :>>  init2
  // 函数式中间件...
}
