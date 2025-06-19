import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, pipe } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private _apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this._apiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this._apiUrl, book);
  }

  updateBook(id: number, changes: Partial<Book>): Observable<Book> {
    return this.http.put<Book>(`${this._apiUrl}/${id}`, changes);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/${id}`);
  }
}
