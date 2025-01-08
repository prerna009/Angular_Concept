import { createReducer, on } from '@ngrx/store';
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo, toggleTodo } from '../actions/todo.action';
import { Todo } from '../../models/todo.model';

export interface TodoState {
  todos: Todo[];
  error:string|null;
}

export const initialState: TodoState = {
  todos: [],
  error:null,
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    error:null
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [ ...state.todos, todo ],
    error:null
  })),
  on(removeTodo,(state,{ id })=>({
    ...state,
    todos:state.todos.filter((todo)=>todo.id!==id),
  })),
  on(toggleTodo,(state,{id })=>({
    ...state,
    todos:state.todos.map((todo)=>
      todo.id===id? {...todo,completed:!todo.completed}:todo
  ),
  })),
);
