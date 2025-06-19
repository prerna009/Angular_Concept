import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BookStore } from '../store/book.store';
import { BookApiService } from './book-api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _apiUrl = "http://localhost:3000/books";

  constructor(private apiService: BookApiService, private bookStore: BookStore) { }

  loadBooks() {
    this.apiService.getBooks().subscribe(books => this.bookStore.set(books));
  }

  addBook(book: Book) {
    this.apiService.addBook(book).subscribe(book => this.bookStore.add(book));
  }

  updateBook(id: number, updatedbook: Book) {
    this.apiService.updateBook(id, updatedbook).subscribe(b => this.bookStore.update(b));
  }

  deleteBook(id: number) {
    this.apiService.deleteBook(id).subscribe(() => this.bookStore.remove(id));
  }

}