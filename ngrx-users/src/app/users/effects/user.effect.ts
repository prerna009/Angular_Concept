import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, map, catchError, switchMap } from "rxjs";
import { UserService } from "../services/user.service";
import * as UserActions from "../actions/user.action";

@Injectable()
export class UserEffect {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUsers$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() => 
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );
}