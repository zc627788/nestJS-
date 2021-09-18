import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  // 路由模糊匹配
  @Get('e*it')
  edit() {
    return '模糊匹配';
  }
  //   res:http://localhost:3000/user/edit
  //   模糊匹配

  // ================================================

  @Get('add')
  add(@Query('id') id): string {
    //   history路由
    console.log(`id`, id);
    return `history获取路由${id}`;
  }
  //   http://localhost:3000/user/add?id=333
  //   history获取路由333

  // ================================================

  @Get(':id')
  index(@Param() param): string {
    console.log(`param`, param);
    return `hash路由id${param.id}`;
  }
  //   http://localhost:3000/user/123
  //   hash路由id123
}
