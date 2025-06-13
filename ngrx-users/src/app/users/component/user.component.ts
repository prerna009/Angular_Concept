import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/user';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectLoading } from '../selectors/user.selector';
import * as UserActions from '../actions/user.action';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  userForm: FormGroup;
  selectedUserId: any;

  constructor(private store: Store, private fb: FormBuilder) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectLoading);

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  editUser(user: any) {
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
    });
    this.selectedUserId = user.id;
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  onSubmit() {
    const user = this.userForm.value;

    if (this.selectedUserId) {
      const updatedUser: User = {
        id: this.selectedUserId,
        ...user,
      };
      this.store.dispatch(UserActions.updateUser({ user: updatedUser }));
    } else {
      this.store.dispatch(UserActions.addUser({ user }));
    }
  }
}
