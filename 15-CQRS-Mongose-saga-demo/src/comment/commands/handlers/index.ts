import { RegisterCommentHandler } from "./register-comment.handler";
import { UpdateCommentHandle } from './update-comment.handlle';
import { RemoveCommentHandler } from './remove-comment.handler';
import { AddCommentHandler } from './add-comment.handler';


export const CommandHandlers = [
  AddCommentHandler,
  RemoveCommentHandler,
  UpdateCommentHandle,
  RegisterCommentHandler
];
