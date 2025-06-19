import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from '../model/book';

export interface BookState extends EntityState<Book, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books' })
export class BookStore extends EntityStore<BookState> {
  constructor() {
    super();
  }
}
