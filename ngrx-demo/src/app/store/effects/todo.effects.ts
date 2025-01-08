import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from '../actions/todo.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosFailure({ error: error.message })))
        )
      )
    )
  );
}
