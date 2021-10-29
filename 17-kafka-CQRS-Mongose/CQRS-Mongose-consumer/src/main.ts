import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['10.240.131.10:9092'],
      },
      consumer: {
        grouoId: 'kafka',
      },
    },
  });

  const options = new DocumentBuilder()
    .setTitle('comments example')
    .setDescription('The comments API description')
    .setVersion('1.0')
    .addTag('comments')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
