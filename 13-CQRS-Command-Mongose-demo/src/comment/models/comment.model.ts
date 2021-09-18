import { AggregateRoot } from '@nestjs/cqrs';
import { CommentAddedEvent } from '../events/interfaces/comment-added.event';
export class Comment extends AggregateRoot {
  private readonly username: string;
  private readonly phone: string;
  constructor(username: string, phone: string) {
    super();
    this.username = username;
    this.phone = phone;
    console.log(`3.model触发,触发event的枢纽${username}-${phone}`);
  }
  public addItemComment() {
    // 实例并绑定event中的CommentAddedEvent
    return this.apply(new CommentAddedEvent(this.username, this.phone));
  }
}
