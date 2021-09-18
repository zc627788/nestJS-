// Nestjs中的管道可以将输入数据转换为所需的输出。此外，它也可以处理验证，当数据不正确时会抛出异常
import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { NewPipe } from '../pipe/new.pipe';
import * as Joi from 'joi';
const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});
@Controller('new')
export class NewController {
  //http://localhost:3000/user?name=zhangsan&age=xxx
  //http://localhost:3000/user?name=zhangsan&age=20
  @Get()
  @UsePipes(new NewPipe(userSchema))
  index(@Query() info) {
    console.log('info :>> ', info);
    return `验证${(info.name && '成功') || '失败'}${info.name || info.message}${
      info.age || ''
    }`;
  }
}
