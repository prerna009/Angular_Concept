import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todo$!:Todo[];
  newTodoTitle='';
  todoForm: FormGroup;
  
  constructor(private fb:FormBuilder){
    this.todoForm=this.fb.group({});
  }

  addTodo():void{

  }

  removeTodo(id:string){

  }

  toggleTodo(id:string){

  }

}
