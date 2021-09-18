import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { RegisterCommentInterface } from './../commands/interfaces';
import { CommentAddedEvent } from '../events/interfaces/comment-added.event';

@Injectable()
export class CommentSagas {
  @Saga()
  commentAdd = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CommentAddedEvent),
      delay(1),
      map((event) => {
        console.log(`5.Add:saga触发给与Register`, event);
        return new RegisterCommentInterface(
          event.inputUsername,
          event.inputPhone,
        );
        return false;
      }),
    );
  };
}
