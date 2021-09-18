import { RegisterCommentInterface } from './../interfaces';
// 该模块将会被saga调用，不会经过controller
// 顺序
// handler--->model----> event---> saga ----> RegisterCommentInterface
import { AddCommentInterface } from './../interfaces/add-comment-interface';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Comment } from '../../models/comment.model';
import { CommentCurd } from '../../crud/comment-Curd';
import { InjectModel } from '@nestjs/mongoose';

@CommandHandler(RegisterCommentInterface)
export class RegisterCommentHandler
  implements ICommandHandler<RegisterCommentInterface>
{
  constructor(
    @InjectModel('COMMENT_MODULE')
    private readonly commentCurd: CommentCurd,
  ) {}

  async execute(command: RegisterCommentInterface) {
    console.log(
      `6. Register:触发register-handler 名字${command.username},电话号码${command.phone}`,
    );


    // 插入数据到数据库
    return await this.commentCurd.create({
      username: command.username,
      phone: command.phone,
    });
  }
}
