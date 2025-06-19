import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { BookQuery } from '../query/book.query';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books$!: Observable<Book[]>;
  bookForm: FormGroup;
  isEditMode: boolean = false;
  editingBookId: number | null = null;

  constructor(
    private bookService: BookService,
    private bookQuery: BookQuery,
    private fb: FormBuilder
  ) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      genres: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.books$ = this.bookQuery.selectAll();
    this.bookService.loadBooks();
  }

  editBook(book: Book) {
    this.bookForm.patchValue({
      name: book.name,
      author: book.author,
      genres: book.genres.join(', '),
      description: book.description,
    });
    this.editingBookId = book.id!;
    this.isEditMode = true;
  }

  delete(id: number) {
    this.bookService.deleteBook(id);
  }

  onSubmit() {
    const value = this.bookForm.value;
    const book: Book = {
      ...value,
      genres: value.genres.split(',').map((g: string) => g.trim()),
    };

    if (this.isEditMode && this.editingBookId !== null) {
      this.bookService.updateBook(this.editingBookId, book);
      this.ngOnInit();
    } else {
      this.bookService.addBook(book);
    }

    this.resetForm();
  }

  resetForm() {
    this.bookForm.reset();
    this.isEditMode = false;
    this.editingBookId = null;
  }
}
