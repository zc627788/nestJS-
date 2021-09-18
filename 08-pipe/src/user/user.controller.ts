import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UserPipe } from '../pipe/user.pipe';
@Controller('user')
export class UserController {
  @Get()
  @UsePipes(new UserPipe())
  index(@Query() info) {
    console.log('info :>> ', info);
    return `管道成功改变值${info.id}`;
    // http://localhost:3000/user?id=123
    // 管道成功改变值666666
  }
}
