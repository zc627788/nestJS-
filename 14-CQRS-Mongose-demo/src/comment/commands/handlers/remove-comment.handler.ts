import { RemoveCommentInterface } from './../interfaces';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CommentCurd } from '../../crud/comment-Curd';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(RemoveCommentInterface)
export class RemoveCommentHandler
  implements ICommandHandler<RemoveCommentInterface>
{
  constructor(private readonly commentCurd: CommentCurd) {}
  async execute(command: RemoveCommentInterface) {
    console.log(`2.remove-command触发,你的名字叫${command.username}`);
    // 删除数据
    return await this.commentCurd.remove(command);
  }
}
