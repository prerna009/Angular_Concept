import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, mergeMap, of, map, catchError } from "rxjs";
import { UserService } from "../services/user.service";
import * as UserActions from "../actions/user.action";

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {
    console.log('actions$ in effect:', this.actions$);
  }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => console.log("Effect triggered - calling getUsers")),
      mergeMap(() => {
        if (!this.userService || !this.userService.getUsers) {
          console.error('UserService or getUsers is undefined!');
          return of(UserActions.loadUsersFailure({ error: 'UserService is undefined' }));
        }
        return this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        );
      })
    )
  );
}