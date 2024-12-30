import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-example',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './binding-example.component.html',
  styleUrl: './binding-example.component.css'
})
export class BindingExampleComponent {
  title:string='My App';
  counter:number=0;

  //attribute binding
  isDisabled:boolean=true;
  myBtn='My Button';

  //style binding
  bgColor:string='maroon';
  titleColor:string='white';
  description:string='font-size:26px; color:khaki';

  //class binding
  redText:string='yes';

  incrementCounter(){
    this.counter++;
  }

  inputText:string='Initial Value';

  //ngClass
  message:string='This is a dangerous message.';
  classes:string='danger text-size';

  //ngStyle
  selectedColor:string='red';
}
