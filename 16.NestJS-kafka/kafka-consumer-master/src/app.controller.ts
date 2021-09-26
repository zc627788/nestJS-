import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('test') // 我们kafka创建的主题
  giveConsumer(@Payload() message) {
    console.log(message.value);
  }
}
