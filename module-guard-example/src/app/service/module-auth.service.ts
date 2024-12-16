import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleAuthService {
  private _url='http://localhost:3000/users';

  constructor(private http:HttpClient,private router:Router) { }

  register(username:string,password:string,role:string):Observable<any>{
    return this.http.post(this._url,{username,password,role});
  }

  login(username:string,password:string):Observable<any>{
    return this.http.get<any[]>(this._url)
    .pipe(map(users=>{
      const user=users.find(u=>u.username===username && u.password===password);
      if(user){
        const token='fake-token-'+new Date().getTime();
        localStorage.setItem('authToken',token);
        localStorage.setItem('userRole',user.role);
        localStorage.setItem('currentUser',JSON.stringify(user));
        return true;
      }
      return false;
    }));
  }

  isAuthenticated():boolean{
    return true; 
  }

  getUserRole():string{
    return localStorage.getItem('userRole') || '';
  }

  isAdmin():boolean{
    return this.getUserRole()==='admin';
  }

  isSupervisor():boolean{
    return this.getUserRole()==='supervisor';
  }

  logout():void{
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
