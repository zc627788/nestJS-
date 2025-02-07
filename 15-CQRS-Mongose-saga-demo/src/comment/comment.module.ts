import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { EventsHandlers } from './events/handlers';
import { ConnectMongo } from './repository/connectMongo.repository';
import { CommentSagas } from './sagas/comment.sagas';
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CommentCurd } from './crud/comment-Curd';

@Module({
  imports: [CqrsModule],
  controllers: [CommentController],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventsHandlers,
    ConnectMongo,
    CommentSagas,
    CommentCurd,
  ],
})
export class CommentModule {}
