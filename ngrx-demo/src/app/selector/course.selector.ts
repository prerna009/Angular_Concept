import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/course.reducer';

export const selectCourseState = createFeatureSelector<State>('course');

export const selectCourses = createSelector(selectCourseState,(state: State) => state.courses);

export const selectLoading = createSelector(selectCourseState,(state: State) => state.loading);

export const selectError = createSelector(selectCourseState,(state: State) => state.error);
