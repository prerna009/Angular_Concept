import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: string;
  @Output() taskDelete= new EventEmitter<string>();

  onDeleteTask(){
    this.taskDelete.emit();
  }
}
