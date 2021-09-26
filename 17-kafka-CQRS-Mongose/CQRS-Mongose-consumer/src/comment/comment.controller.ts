import { GetConnectMongoQuery } from './queries/interfaces';
import {
  AddCommentInterface,
  RemoveCommentInterface,
  UpdateCommentInterface,
} from './commands/interfaces';
import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiQuery } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('comments')
export class CommentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiQuery({
    name: 'phone',
    description: '这是需要传递的参数',
  })
  async findAll(@Query() phone?: string): Promise<GetConnectMongoQuery[]> {
    console.log('1.controller获取触发', phone);
    // GetConnectMongoQuery是连接queries里的handler的关键字
    return this.queryBus.execute(new GetConnectMongoQuery(phone));
  }

  @MessagePattern('addTest')
  async addUser(@Payload() user) {
    console.log('username123123', user.value);
    const { username, phone } = user.value;

    console.log(`1.controller新增触发`, user.value);
    // addCommentInterface 是 连接 command里 add-comment handler的关键字

    return this.commandBus.execute(new AddCommentInterface(username, phone));
  }

  @MessagePattern('updateTest')
  async updateUser(@Payload() user) {
    const { username, phone } = user.value;
    console.log(`1.controller更新触发`, user.value);
    // UpdateCommentInterface 是 连接 command里 update-comment handler的关键字

    return this.commandBus.execute(
      new UpdateCommentInterface(username, phone),
    );
  }

  @MessagePattern('deleteTest')
  @ApiQuery({
    name: 'username',
    description: '这是需要传递的参数',
  })
  async Delete(@Payload() user) {
    const { username } = user.value;
    console.log('1.controller删除触发 username', user.value);
    //  RemoveCommentInterface是连接command里的 remove-comment handler的关键字
    return this.commandBus.execute(new RemoveCommentInterface(username));
  }
}
