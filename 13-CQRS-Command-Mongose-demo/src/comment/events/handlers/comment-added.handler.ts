import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { CommentAddedEvent } from '../interfaces/comment-added.event';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@EventsHandler(CommentAddedEvent)
@Injectable()
export class CommentAddedHandler implements IEventHandler<CommentAddedEvent> {
  constructor(
    @InjectModel('COMMENT_MODULE')
    private readonly commentModel: Model<CommentAddedEvent>,
  ) {}
  async handle(event: CommentAddedEvent) {
    console.log(`4.events触发${event.inputUsername}-${event.inputPhone}`);
    // 插入数据到数据库
    await new this.commentModel({
      username: event.inputUsername,
      phone: event.inputPhone,
    }).save();
    return `${event.inputUsername}-${event.inputPhone}`;
  }
}
