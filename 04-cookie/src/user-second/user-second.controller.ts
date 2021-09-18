import { Controller, Get, Request } from '@nestjs/common';

@Controller('user-second')
export class UserSecondController {
  @Get('cookie')
  getCookie(@Request() req) {
    //   未加密时获取
    console.log('req.cookies.username :>> ', req.cookies.username);
    // 加密时获取
    console.log('req.cookies.username :>> ', req.signedCookies.username);

    // return req.cookies;
    return req.signedCookies.username;
  }
  // res
  //   没请求user前
  //   http://localhost:3000/user-second/cookie
  // {}
  //   请求user后
  // {"username":"zzc"}
  //   关闭页面，重新访问，也是 {"username":"zzc"}
}
