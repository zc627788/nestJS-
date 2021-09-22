import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientKafka, Transport } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'kafkaExample',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'kafka' // 必须要nest consumer的Id一致
      }
    }
  })
  client: ClientKafka;

  async onModuleInit() {
    //监听和连接topic
    this.client.subscribeToResponseOf('test');
    await this.client.connect();
  }

  @Get()
  getHello() {
      // test--->topic主题  Hello World传过去的信息
      // 打开网页 localhost:3000 可以在consumer控制台看到效果
    return this.client.send('test', 'Hello World'); 
  }
}
