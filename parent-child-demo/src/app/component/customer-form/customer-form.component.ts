import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer } from '../../Interface/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnChanges{
  @Input() customer!: Customer;

  @Output() update=new EventEmitter<Customer>();
  
  customerForm: FormGroup;
  
  constructor(private fb:FormBuilder){
    this.customerForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern('^[A-Z][a-zA-Z\\s]*$')]],
      age:[0,Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customer'] && this.customer) {
      this.customerForm.patchValue({
        name: this.customer.name,
        age: this.customer.age
      });
    }
  }

  onSubmit():void{
    if(this.customerForm.valid){
      const updatedCustomer={...this.customer,...this.customerForm.value};
      this.update.emit(updatedCustomer);
    }
    else{
      console.log("Form is invalid");
    }
  }

  closeModal(): void {
    this.customerForm.reset();
  }
}