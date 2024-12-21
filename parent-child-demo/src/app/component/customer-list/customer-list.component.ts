import { Component } from '@angular/core';
import { Customer } from '../../Interface/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  showModal:boolean=false;
  customers:Customer[]=[
    {id:1,name:'Prerna',age:22},
    {id:2,name:'Sumeet',age:20},
    {id:3,name:'Anil',age:50},
    {id:4,name:'Rani',age:48},
    {id:5,name:'Priyanka',age:28}
  ]

  selectedCustomer:Customer | null= null;

  handleCustomerUpdate(updatedCustomer: Customer): void {
    const index = this.customers.findIndex(customer => customer.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
    this.selectedCustomer = null; 
    this.closeModal();
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer }; 
    this.openModal();
  }

  openModal(){
    this.showModal=true;
  }

  closeModal(){
    this.showModal=false;
  }
}
