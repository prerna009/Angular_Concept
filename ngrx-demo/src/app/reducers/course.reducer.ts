import { createReducer, on } from '@ngrx/store';
import { Course } from '../models/course';
import * as CourseActions from '../actions/course.action';

export interface State {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true
  })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(CourseActions.addCourse, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course]
  })),
  on(CourseActions.updateCourse, (state, { course }) => ({
    ...state,
    courses: state.courses.map((c) =>
      c.id === course.id ? { ...c, ...course } : c
    )
  })),
  on(CourseActions.deleteCourse, (state, { id }) => ({
    ...state,
    courses: state.courses.filter((course) => course.id !== id)
  }))
);
