import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Length, IsNotEmpty } from 'class-validator';
@Schema({ timestamps: true, validateBeforeSave: true })
export class User extends Document {
  @Prop()
  readonly phone: string;

  @Prop()
  readonly password: string;
}
