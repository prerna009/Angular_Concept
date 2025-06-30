import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiUserUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  fetchDataFromAPI() {
    return this.http.get(this.apiUrl);
  }

  fetchUserData() {
    return this.http.get(this.apiUserUrl);
  }
}
