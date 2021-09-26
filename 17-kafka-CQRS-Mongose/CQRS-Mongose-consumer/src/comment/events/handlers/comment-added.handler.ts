import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { CommentAddedEvent } from '../interfaces/comment-added.event';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@EventsHandler(CommentAddedEvent)
@Injectable()
export class CommentAddedHandler implements IEventHandler<CommentAddedEvent> {
  constructor() {}
  async handle(event: CommentAddedEvent) {
    // return `${event.inputUsername}-${event.inputPhone}`;
    console.log(`4.event触发`);
  }
}
