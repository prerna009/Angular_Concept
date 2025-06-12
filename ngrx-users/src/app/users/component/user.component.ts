import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/user';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectLoading } from '../selectors/user.selector';
import * as UserActions from "../actions/user.action";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectLoading);
  }
  
  ngOnInit(): void {
    console.log("Dispatching loadUsers...");
    this.store.dispatch(UserActions.loadUsers());
  }
}
