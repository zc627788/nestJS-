import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test') // kafka主题
  giveConsumer(@Payload() message) {
    console.log(message.value);
  }
}
