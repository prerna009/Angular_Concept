import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';
import { catchError, Observable, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any[]>{
    return this.http.get<any[]>(this._url);
  }

  getEmployeeById(id:number):Observable<any>{
    const url=`${this._url}/${id}`;
    return this.http.get<any>(url);
  }
}
