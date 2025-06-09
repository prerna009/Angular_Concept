import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  toppings: FormGroup;

  constructor(private fb: FormBuilder) {
    this.toppings = this.fb.group({
      pepperoni: new FormControl(false),
      extracheese: new FormControl(false),
      mushroom: new FormControl(false)
    });
  }
}
