import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

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
          if (user) {
            localStorage.setItem('authToken', 'authToken'); // Save token
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
  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}