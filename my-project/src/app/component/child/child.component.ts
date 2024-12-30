import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() task!: string;
  @Output() taskDeleted = new EventEmitter<void>();

  onDeleteClick():void{
    this.taskDeleted.emit();
  }
}
