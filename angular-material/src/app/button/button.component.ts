import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  selectedValue='';
  alertsEnabled=false;
  toppings:FormGroup;
  range:FormGroup;

  constructor(private fb:FormBuilder){
    this.toppings = this.fb.group({
      pepperoni:false,
      cheese:false,
      mushroom:false
    });
    this.range=this.fb.group({
      start:new FormControl<Date | null>(null),
      end:new FormControl<Date | null>(null),
    });
  }
}
