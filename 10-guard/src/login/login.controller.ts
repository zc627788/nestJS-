import { Controller, Get, Request } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  index(@Request() req) {
    // console.log('object :>> ', req.session);
    req.session.username = 'zzc';
    return '登录成功';
  }

  @Get('test')
  testIndex(@Request() req) {
    return req.session.username;
  }
}
