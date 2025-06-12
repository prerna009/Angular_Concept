import { createReducer, on } from '@ngrx/store';
import { User } from '../modal/user';
import * as userActions from '../actions/user.action';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(userActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(userActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
