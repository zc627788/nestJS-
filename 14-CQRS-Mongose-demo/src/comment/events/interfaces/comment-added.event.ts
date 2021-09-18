import { Prop, Schema } from '@nestjs/mongoose';
export class CommentAddedEvent {
  constructor(
    public readonly inputUsername: string,
    public readonly inputPhone: string,
  ) {}
}
