import { Controller, Get, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index(@Response() res) {
    //   未加密cookie
    res.cookie('username', 'zzc', { maxAge: 999999999, httpOnly: true });
    // 加密cookie
    res.cookie('username', 'zzc', {
      maxAge: 999999999,
      httpOnly: true,
      signed: true,
    });

    res.send('这是用户1');
  }
}
