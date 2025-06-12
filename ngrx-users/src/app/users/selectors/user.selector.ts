import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducer";

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
    selectUserState,
    (state) => state.users
);

export const selectLoading = createSelector(
    selectUserState,
    (state) => state.loading
);