import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear: boolean = false;

  constructor(private fb: FormBuilder){
     this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
     });

     this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
     });
  }
}
