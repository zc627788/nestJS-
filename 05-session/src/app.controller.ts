import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req): string {
    req.session.name = 'jackson';
    return this.appService.getHello();
  }
  @Get('user')
  user(@Request() req): string {
    console.log('req.session.username :>> ', req.session.name);
    return `这是session${req.session.name}`;

    // res:http://localhost:3000/user
    // req.session.username :>>  jackson
  }
}
