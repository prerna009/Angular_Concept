import { createReducer, on } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo, toggleTodo } from '../actions/todo.action';
import { Todo } from '../../models/todo.model';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
    {
      id: '1',
      title: 'Todo 1',
      completed: false,
      userId: 1,
    },
  ],
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, { todos}) =>({ 
    ...state,
    todos
  })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [ ...state.todos, todo ],
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
