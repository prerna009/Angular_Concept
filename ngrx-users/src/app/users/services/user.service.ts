import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this._apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this._apiUrl}/${user.id}`,user);
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this._apiUrl}/${id}`);
  }
}
