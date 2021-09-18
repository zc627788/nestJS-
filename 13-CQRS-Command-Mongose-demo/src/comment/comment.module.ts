import { EventsHandlers } from './events/handlers';
import { CommandHandlers } from './command/handlers';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [CommentController],
  providers: [...CommandHandlers, ...EventsHandlers],
})
export class CommentModule {}
