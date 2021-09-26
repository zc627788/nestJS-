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
import { ApiQuery, ApiProperty } from '@nestjs/swagger';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

class CreatePostDto {
  @ApiProperty({ description: '用户' })
  username: string;
  @ApiProperty({ description: '手机号码' })
  phone: string;
}

@Controller('comments')
export class CommentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'kafkaExample',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'kafka', // 必须要nest consumer的Id一致
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    //监听和连接topic
    this.client.subscribeToResponseOf('addTest');
    this.client.subscribeToResponseOf('updateTest');
    this.client.subscribeToResponseOf('deleteTest');

    await this.client.connect();
  }

  @Get()
  @ApiQuery({
    name: 'username',
    description: '这是需要传递的参数',
  })
  async findAll(@Query() username?: string): Promise<GetConnectMongoQuery[]> {
    console.log('1.controller获取触发', username);
    // GetConnectMongoQuery是连接queries里的handler的关键字
    // this.client.emit('test', 'Hello World');
    return this.queryBus.execute(new GetConnectMongoQuery(username));
  }

  @Post('add')
  async addUser(@Body() params: CreatePostDto) {
    console.log(`1.controller新增触发`, params);
    // addCommentInterface 是 连接 command里 add-comment handler的关键字

    const adduser = await this.commandBus.execute(
      new AddCommentInterface(params.username, params.phone),
    );
    this.client.emit('addTest', JSON.stringify(adduser));
    console.info('adduser', adduser.username);
    return adduser;
  }

  @Put('update')
  async updateUser(@Body() params: CreatePostDto) {
    console.log(`1.controller更新触发`, params);
    // UpdateCommentInterface 是 连接 command里 update-comment handler的关键字

    const upadteUser = await this.commandBus.execute(
      new UpdateCommentInterface(params.username, params.phone),
    );
    
    if (upadteUser) {
      this.client.emit('updateTest', JSON.stringify(params));
    }
    return upadteUser;
  }

  @Delete('delete/:username')
  @ApiQuery({
    name: 'username',
    description: '这是需要传递的参数',
  })
  async Delete(@Query('username') params?: string) {
    console.log('1.controller删除触发 username', params);
    //  RemoveCommentInterface是连接command里的 remove-comment handler的关键字
    const deleteUser = await this.commandBus.execute(
      new RemoveCommentInterface(params),
    );
    console.log('object', JSON.stringify(deleteUser));
    this.client.emit('deleteTest', JSON.stringify(deleteUser));
    return deleteUser;
  }
}
