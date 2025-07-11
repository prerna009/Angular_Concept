import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private apiUrl = 'http://localhost:3000/fields';

  constructor(private http: HttpClient) { }

  getAllFields(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDynamicFields(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addDynamicField(field: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, field);
  }

  updateDynamicField(id: number, field: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, field);
  }

  deleteField(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
