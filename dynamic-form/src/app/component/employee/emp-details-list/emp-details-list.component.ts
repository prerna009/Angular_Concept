import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/employee';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeeService } from '../../../service/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetailsFormComponent } from '../emp-details-form/emp-details-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-emp-details-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './emp-details-list.component.html',
  styleUrl: './emp-details-list.component.css'
})
export class EmpDetailsListComponent implements OnInit{
  employeeData: Employee[] = [];
  displayedColumns: string[] = ['name', 'emailID', 'mobileNo', 'hobbies', 'skills', 'address', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  searchText: string = '';

  constructor(private empService: EmployeeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData() {
    this.empService.getEmployeeDetails().subscribe(res => {
      this.employeeData = res;
      this.dataSource.data = this.employeeData;
    });
  }

  openDialog(action: 'add' | 'edit', empId: number | null = null) {
    const dialogRef = this.dialog.open(EmpDetailsFormComponent, {
      width: '600px',
      data: { action, empId }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEmployeeData();
      }
    });
  }
  
  deleteEmployee(id: number) {
    this.empService.deleteEmployeeDetail(id).subscribe(() => this.loadEmployeeData());
  }

  getHobbies(employee: Employee): string {
    return employee.hobbies?.map((h: any) => h.Value).join(', ') || '-';
  }

  getSkills(employee: Employee): string {
    return employee.skills?.map((skill: any) => skill.Value).join(', ') || '-';
  } 
}
