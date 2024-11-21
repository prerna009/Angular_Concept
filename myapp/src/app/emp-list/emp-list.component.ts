import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interface/employee';
import { catchError, throwError } from 'rxjs';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {
  employees: any[]=[];
  errorMessage:string='';

  constructor(private empService: EmployeeService,private router:Router) { };

  // ngOnInit(): void {
  //   this.empService.getEmployees().subscribe({
  //     next:(data)=>{
  //       this.employees=data;
  //     },
  //     error:(error)=>{
  //       this.errorMessage=error.message || 'Failed to load employee data';
  //       console.log('Error occurred : ',error);
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe({
      next:(data)=>{
        this.employees=data;
      },
      error:(error)=>{
        console.log('Error fetching employee data : ',error);
      }
    });
  }

  goToEmployeeDetail(id: number): void {
    this.router.navigate([`/employees/${id}`]); 
  }
}
