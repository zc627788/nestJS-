import { UpdateCommentInterface } from './../interfaces';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CommentCurd } from '../../crud/comment-Curd';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(UpdateCommentInterface)
export class UpdateCommentHandle
  implements ICommandHandler<UpdateCommentInterface>
{
  constructor(private readonly commentCurd: CommentCurd) {}
  async execute(command: UpdateCommentInterface) {
    console.log(`2.Upadte:update-command触发,名字${command.username},电话${command.phone}`);
    // 删除数据
    return await this.commentCurd.update(command);
  }
}
