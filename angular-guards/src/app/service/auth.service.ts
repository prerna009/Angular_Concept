import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, find, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  
  constructor(private http: HttpClient, private router: Router) { }
  
  // Register new user
  register(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
  
  // Login
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl)
    .pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        const fakeToken='fake-jwt-token-'+new Date().getTime();
          if (user) {
            localStorage.setItem('authToken', fakeToken); // Save token
            localStorage.setItem('username',username);
            return true;
          }
          return false;
        })
      );
  }
  // Check if user is authenticated
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('authToken');
      return token != null;
    }
    return false;  
  }

  getToken(){
    return localStorage.getItem('authToken');
  }
  getUsername(){
    return localStorage.getItem('username');
  }
  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}