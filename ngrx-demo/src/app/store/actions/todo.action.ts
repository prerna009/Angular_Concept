import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const loadTodos = createAction(
  '[Todos] Load Todos',
  props<{todos:Todo[]}>()
);
export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: Todo }>()
);
export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{ id: string }>()
);
export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ id: string }>()
);
