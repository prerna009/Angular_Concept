import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; 
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

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
            const token = 'fake-token-' + new Date().getTime();
            localStorage.setItem('authToken', token); // Save token
            return true;
          }
          return false;
        })
      );
  }

  isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }

  // Logout function
  logout(): void {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    this.tokenSubject.next(null); // Clear token in the observable
    this.router.navigate(['/login']); // Redirect to login page
  }
}