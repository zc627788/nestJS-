import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  index() {
    return 'user111';
  }
  @Get('go')
  go() {
    return this.userService.getUser();
  }
}
