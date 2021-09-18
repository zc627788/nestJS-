import { Prop, Schema } from '@nestjs/mongoose';
export class CommentAddedEvent {
  constructor(
    public readonly inputUsername: string,
    public readonly inputPhone: string,
  ) {}
  @Prop()
  readonly username: string;
  @Prop()
  readonly phone: string;
}
