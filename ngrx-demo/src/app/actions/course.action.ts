import { createAction, props } from "@ngrx/store";
import { Course } from "../models/course";

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: Course[] }>());

export const loadCoursesFailure = createAction('[Course] Load Courses Failure',props<{ error: any }>());  

export const addCourse = createAction('[Course] Add Course', props<{ course: Course }>());

export const updateCourse = createAction('[Course] Update Course', props<{ course: Course }>());

export const deleteCourse = createAction('[Course] Delete Course', props<{ id: number }>());