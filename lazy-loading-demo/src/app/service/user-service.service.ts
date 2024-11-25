import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //private _url:string='http://localhost:3000/users';

  private _url1:string='http://localhost:3000/register';

  constructor(private http:HttpClient) { }

  // save(user:User):Observable<any>{
  //   return this.http.post<any>(this._url,user);
  // }

  registerUser(user:User):Observable<User>{
    return this.http.post<User>(this._url1,user);
  }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this._url1);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this._url1}/${id}`);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this._url1}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this._url1}/${user.id}`, user);
  }
}
