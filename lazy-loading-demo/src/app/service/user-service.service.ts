import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url:string='http://localhost:3000/users';

  private _url1:string='http://localhost:3000/register';

  constructor(private http:HttpClient) { }

  save(user:User):Observable<any>{
    return this.http.post<any>(this._url,user);
  }

  register(user:User):Observable<any>{
    return this.http.post<any>(this._url1,user);
  }

  getUser():Observable<any[]>{
    return this.http.get<any[]>(this._url1);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this._url1}/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this._url1}/${id}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this._url1}/${user.id}`, user);
  }
}
