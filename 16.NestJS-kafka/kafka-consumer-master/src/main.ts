import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'kafka', //必须要nest producer的Id一致
        },
      },
    },
  );

  app.listen(() => console.log('consumer is listening!'));
  console.log('consumer is listening!');
}
bootstrap();
