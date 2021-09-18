import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
// Nestjs 中的服务可以是 service 也可以是 provider。他们都可以通过 constructor 注 入依赖关系。服务本质上就是通过@Injectable() 装饰器注解的类。在 Nestjs 中服务相 当于 MVC 的 Model。
@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  @Get()
  index() {
    return this.userServices.findAll();
  }
  //   res:http://localhost:3000/user
  // [{"title":"用户11111"},{"title":"用户2222"},{"title":"用户3333"},{"title":"用户4444"},{"title":"用户55555"}]
}
