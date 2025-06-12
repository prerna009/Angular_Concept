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

  addUser$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.addUser),
      switchMap(({user}) => 
        this.userService.addUser(user).pipe(
          map((newUser) => UserActions.addUserSuccess({ user: newUser })),
          catchError((error) => of(UserActions.addUserFailure({ error })))
        )
      )
    )
  );

  updateUser$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({user}) => 
        this.userService.updateUser(user).pipe(
          map((updatedUser) => UserActions.updateUserSuccess({ user: updatedUser })),
          catchError((error) => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );

  deleteUser$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({id}) => 
        this.userService.deleteUser(id).pipe(
          map(() => UserActions.deleteUserSuccess({ id })),
          catchError((error) => of(UserActions.deleteUserFailure({ error })))
        )
      )
    )
  );
}