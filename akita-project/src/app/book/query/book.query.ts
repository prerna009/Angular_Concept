import { QueryEntity } from "@datorama/akita";
import { Book } from "../model/book";
import { BookState, BookStore } from "../store/book.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BookQuery extends QueryEntity<BookState, Book> {
    constructor(protected override store: BookStore) {
        super(store);
    }
}