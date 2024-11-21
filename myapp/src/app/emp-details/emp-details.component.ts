import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interface/employee';
import { error } from 'console';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent implements OnInit{
  employee:any;
  errorMessage:string='';

  constructor(private empService:EmployeeService,private route:ActivatedRoute){};

  ngOnInit(): void {
    const empId=this.route.snapshot.paramMap.get('id');
    if(empId){
      this.empService.getEmployeeById(Number(empId)).subscribe({
        next:(data)=>{
          this.employee=data;
        },
        error:(error)=>{
          this.errorMessage=`Failed to load data: ${error.message}`;
        }
      });
    } else{
      this.errorMessage='Employee ID is missing';
    }
  }
}
