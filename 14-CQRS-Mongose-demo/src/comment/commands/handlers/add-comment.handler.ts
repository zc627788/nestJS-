import { AddCommentInterface } from './../interfaces/add-comment-interface';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Comment } from '../../models/comment.model';
import { CommentCurd } from '../../crud/comment-Curd';
import { InjectModel } from '@nestjs/mongoose';
@CommandHandler(AddCommentInterface)
export class AddCommentHandler implements ICommandHandler<AddCommentInterface> {
  constructor(
    @InjectModel('COMMENT_MODULE')
    private readonly commentCurd: CommentCurd,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddCommentInterface) {
    console.log(
      `2.command触发,你的名字叫${command.username},你的电话号码是${command.phone}`,
    );

    const event = this.publisher.mergeObjectContext(
      new Comment(command.username, command.phone),
    );

    event.addItemComment();
    event.commit();
    // 插入数据库
    return await this.commentCurd.create({
      username: command.username,
      phone: command.phone,
    });
  }
}
