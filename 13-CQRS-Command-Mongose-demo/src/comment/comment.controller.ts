import { AddCommentInterface } from './command/interfaces/add-comment-interface';
import { Controller, Post, Param, Body, Query } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
class CreatePostDto {
  @ApiProperty({ description: '用户' })
  username: string;
  @ApiProperty({ description: '手机号码' })
  phone: string;
}
@ApiTags('comments')
@Controller('comment')
export class CommentController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post('add')
  async addUser(@Body() query: CreatePostDto) {
    console.log(`1.controller触发`, query);
    return this.commandBus.execute(
      new AddCommentInterface(query.username, query.phone),
    );
  }
}
