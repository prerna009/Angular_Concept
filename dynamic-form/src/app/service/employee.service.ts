import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this._apiUrl}/${id}`);
  }

  addEmployeeDetail(addEmployee: any): Observable<Employee>{
    return this.http.post<Employee>(this._apiUrl, addEmployee);
  }

  updateEmployeeDetail(updatedEmployee: Employee, empid: number): Observable<Employee>{
    return this.http.put<Employee>(`${this._apiUrl}/${empid}`, updatedEmployee );
  }

  deleteEmployeeDetail(deleteId: number): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/${deleteId}`);
  }
}
