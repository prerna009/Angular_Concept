import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../store/actions/todo.action';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list',
  standalone: false,

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit{
  todo$!: Observable<Todo[]>;
  newTodoTitle = '';
  error$!: Observable<string|null>;

  constructor(private store: Store<{todos:TodoState}>,private todoService:TodoService) {
    this.todo$ = store.select(state=>state.todos.todos);  
    this.error$ = store.select(state=>state.todos.error);
  }
  
  ngOnInit(){
    this.loadTodos();
  }

  loadTodos(): void {
    this.store.dispatch(TodoActions.loadTodos());  // Dispatch action to load todos

    this.todoService.getTodos().subscribe({
      next:(todos) => {
        this.store.dispatch(TodoActions.loadTodosSuccess({ todos }));  // Dispatch success action with data
      },
      error:(error) => {
        this.store.dispatch(TodoActions.loadTodosFailure({ error: error.message }));  // Dispatch failure action in case of error
      }
    }
    );
  }

  addTodo(){
    if (this.newTodoTitle.trim() === '') {
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      title: this.newTodoTitle,
      completed: false,
      userId: 1,
    };
    this.store.dispatch(TodoActions.addTodo({ todo }));
    console.log(todo);
    this.newTodoTitle = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }

  toggleTodo(id: string){
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }
}
