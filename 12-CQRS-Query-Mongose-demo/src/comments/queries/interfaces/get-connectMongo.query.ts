import { Prop, Schema } from '@nestjs/mongoose';
@Schema()
export class GetConnectMongoQuery  {
  constructor(public readonly GetPhone: string) {}
  @Prop()
  readonly phone: string;
}
