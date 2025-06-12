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

  // Load users
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
  })),

  // Add user
  on(userActions.addUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(userActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(userActions.addUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Update user
  on(userActions.updateUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(userActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    loading: false,
  })),
  on(userActions.updateUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Delete user
  on(userActions.deleteUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(userActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id),
    loading: false,
  })),
  on(userActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);