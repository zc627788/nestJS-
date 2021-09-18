import { Controller, Get, Post, Render, Body, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  @Render('post')
  find() {
    return { name: 'jackson' };
  }
  @Post('add')
  doAdd(@Body() body, @Response() Res) {
    console.log('body :>> ', body);
    Res.redirect('/user');
  }
}
