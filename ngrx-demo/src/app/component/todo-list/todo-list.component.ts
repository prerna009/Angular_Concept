import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  removeTodo,
  toggleTodo,
} from '../../store/actions/todo.action';

@Component({
  selector: 'app-todo-list',
  standalone: false,

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit{
  todo$!: Todo[];
  newTodoTitle = '';

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    store.select('todos').subscribe((todostate: { todos: Todo[] }) => {
      this.todo$ = todostate.todos;
      console.log(this.todo$);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos({todos:this.todo$}));
  }

  addTodo(): void {
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    };
    this.store.dispatch(addTodo({ todo }));
    console.log(todo);
    this.newTodoTitle = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTodo(id: string): void {
    this.store.dispatch(toggleTodo({ id }));
  }
}
