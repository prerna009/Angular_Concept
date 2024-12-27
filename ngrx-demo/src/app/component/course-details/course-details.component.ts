import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import * as courseActions from '../../actions/course.action';
import * as courseSelectors from '../../selector/course.selector';
import { State } from '../../reducers/course.reducer';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit{
  courses$: Observable<Course[]>;
  loading$: Observable<boolean> ;
  error$: Observable<string | null>;
  course: Course = {
    id: 0, 
    title: '',
    description: '',
    duration: '',
    price: 0
  };

  constructor(private store: Store<State>,private courseService:CourseService) {
    this.courses$ = this.store.select(courseSelectors.selectCourses);
    this.loading$ = this.store.select(courseSelectors.selectLoading);
    this.error$ = this.store.select(courseSelectors.selectError);
  }

  ngOnInit(): void {
    this.loadCourse();
  }

  loadCourse():void{
    this.courseService.getCourses().subscribe({
      next:(courses)=>{
        this.store.dispatch(courseActions.loadCoursesSuccess({courses}));
      },
      error:(error)=>{
        this.store.dispatch(courseActions.loadCoursesFailure({error:error.message}));
      }
    })
  }

  addCourse(course: Course) :void{
    this.courseService.addCourse(course).subscribe({
      next:(addCourse)=>{
        this.store.dispatch(courseActions.addCourseSuccess({course:addCourse}));
        this.loadCourse();
      },
      error:(error)=>{
        this.store.dispatch(courseActions.addCourseFailure({error}));
      }
    });
  }

  updateCourse(course: Course):void {
    this.courseService.updateCourse(course).subscribe({
      next:(updateCourse)=>{
        this.store.dispatch(courseActions.updateCourseSuccess({course:updateCourse}));
      },
      error:(error)=>{
        this.store.dispatch(courseActions.updateCourseFailure({error}));
      }
    });
  }

  deleteCourse(id: number){
   this.courseService.deleteCourse(id).subscribe({
    next:()=>{
      this.store.dispatch(courseActions.deleteCourseSuccess({id}));
    },
    error:(error)=>{
      this.store.dispatch(courseActions.deleteCourseFailure({error}));
    }
   });
  }

  onSubmit(courseForm:any):void{
    if(this.course.id){
      this.updateCourse(this.course);
    } else{
      this.addCourse(this.course);
    }
  }

  onEdit(course:Course):void{
    this.course={...course};
  }
}

