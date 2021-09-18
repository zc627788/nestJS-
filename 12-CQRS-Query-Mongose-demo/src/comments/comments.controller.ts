import { GetConnectMongoQuery, GetNoMongoQuery } from './queries/interfaces';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam,ApiTags } from '@nestjs/swagger';
import { QueryBus } from '@nestjs/cqrs';


@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async findAll(): Promise<GetNoMongoQuery> {
    console.log(`GetNoMongoQuery`, GetNoMongoQuery);
    // GetNoMongoQuery是连接queries里的handler的关键字

    return this.queryBus.execute(new GetNoMongoQuery());
  }
  @Get(':phone')
  @ApiParam({
    name: 'phone',
    description: '这是需要传递的参数',
  })
  async findAll2(@Param() phone?: string): Promise<GetConnectMongoQuery[]> {
    console.log('1.触发控制器controller phone的值', phone);
    // GetConnectMongoQuery是连接queries里的handler的关键字
    return this.queryBus.execute(new GetConnectMongoQuery(phone));
  }
}
