import { GetConnectMongoQuery } from './queries/interfaces';
import {
  AddCommentInterface,
  RemoveCommentInterface,
  UpdateCommentInterface,
} from './commands/interfaces';
import {
  Controller,
  Post,
  Param,
  Get,
  Body,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { ApiQuery, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '用户' })
  username: string;
  @ApiProperty({ description: '手机号码' })
  phone: string;
}
@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiQuery({
    name: 'username',
    description: '这是需要传递的参数',
  })
  async findAll(@Query() username?: string): Promise<GetConnectMongoQuery[]> {
    console.log('1.Query:controller获取触发', username);
    // GetConnectMongoQuery是连接queries里的handler的关键字
    return this.queryBus.execute(new GetConnectMongoQuery(username));
  }

  @Post('add')
  async addUser(@Body() params: CreatePostDto) {
    console.log(`1.Add:controller新增触发`, params);
    // addCommentInterface 是 连接 command里 add-comment handler的关键字

    return this.commandBus.execute(
      new AddCommentInterface(params.username, params.phone),
    );
  }

  @Put('update')
  async updateUser(@Body() params: CreatePostDto) {
    console.log(`1.Update:controller更新触发`, params);
    // UpdateCommentInterface 是 连接 command里 update-comment handler的关键字

    return this.commandBus.execute(
      new UpdateCommentInterface(params.username, params.phone),
    );
  }

  @Delete('delete/:username')
  @ApiQuery({
    name: 'username',
    description: '这是需要传递的参数',
  })
  async Delete(@Query('username') params?: string) {
    console.log('1.Delete:controller删除触发 username', params);
    //  RemoveCommentInterface是连接command里的 remove-comment handler的关键字
    return this.commandBus.execute(new RemoveCommentInterface(params));
  }
}
