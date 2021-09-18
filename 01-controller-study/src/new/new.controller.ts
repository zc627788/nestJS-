import { Controller, Get, Query, Request, Post, Body } from '@nestjs/common';

@Controller('new')
export class NewController {
  @Get()
  index() {
    return '信息中心';
  }
  //   res:http://localhost:3000/new
  //   信息中心

  // ================================================================================================================================

  // 通过query装饰器获取get传值
  @Get('query')
  queryRouter(@Query() query): string {
    console.log(`query`, query);
    return query;
  }
  //   res:http://localhost:3000/new/query?name=123&password=456
  //   {"name":"123","password":"456"}

  // ================================================================================================================================

  // 通过request装饰器获取get传值
  @Get('request')
  requestRouter(@Request() req): string {
    console.log(`req`, req.query);
    return `通过request获取参数${req.query}`;
  }
  //   res:http://localhost:3000/new/request?name=123
  //   req { name: '123' }
  //  通过request获取参数[object Object]
  //   注意:req不会自觉把对象转为字符串在页面中展示

  // ================================================================================================================================

  // 通过@Bady()装饰器获取post传值
  @Post('create')
  create(@Body() body): string {
    console.log(`触发post`);
    console.log(`body`, body);
    return `post的传值${body}`;
  }
}
// res:http://localhost:3000/new/create
// 触发post
// body { '1111': '2222' }
// post的传值[object Object]
//   注意:body不会自觉把对象转为字符串在页面中展示
