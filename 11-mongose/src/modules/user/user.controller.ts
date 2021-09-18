import { Controller, Body, Post, UsePipes } from '@nestjs/common';
import { User } from '../../dtos/user.dto';

import { UserService } from './user.service';
import { UserPipe } from '../../pipe/user.pipe';

@Controller('user')
@ApiTags('user')
@UsePipes(new UserPipe())
export class UserController {
  constructor(private userService: UserService) {}

  @Post('regist')
  async registUser(@Body() userDto: User) {
    return await this.userService.regist(userDto);
  }
}
