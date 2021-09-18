import { AddCommentInterface } from './../interfaces/add-comment-interface';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Comment } from '../../models/comment.model';

@CommandHandler(AddCommentInterface)
export class AddCommentHandler implements ICommandHandler<AddCommentInterface> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: AddCommentInterface) {
    console.log(
      `2.command触发,你的名字叫${command.username},你的电话号码是${command.phone}`,
    );
    const event = this.publisher.mergeObjectContext(
      new Comment(command.username, command.phone),
    );

    event.addItemComment();
    event.commit();
    return `数据插入成功`;
  }
}
