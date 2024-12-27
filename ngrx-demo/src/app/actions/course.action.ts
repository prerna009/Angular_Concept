import { createAction, props } from "@ngrx/store";
import { Course } from "../models/course";

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: Course[] }>());

export const loadCoursesFailure = createAction('[Course] Load Courses Failure',props<{ error: string }>());  

export const addCourse = createAction('[Course] Add Course', props<{ course: Course }>());

export const addCourseSuccess = createAction('[Course] Add Course Success', props<{ course: Course }>());

export const addCourseFailure = createAction('[Course] Add Course Failure', props<{ error :string }>());

export const updateCourse = createAction('[Course] Update Course', props<{ course: Course }>());

export const updateCourseSuccess = createAction('[Course] Update Course Success', props<{ course: Course }>());

export const updateCourseFailure = createAction('[Course] Update Course Failure', props<{ error:string }>());

export const deleteCourse = createAction('[Course] Delete Course', props<{ id: number }>());

export const deleteCourseSuccess = createAction('[Course] Delete Course', props<{ id: number }>());

export const deleteCourseFailure = createAction('[Course] Delete Course', props<{ error:string }>());