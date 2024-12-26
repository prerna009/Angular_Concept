import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import { addCourse, deleteCourse, loadCourses, updateCourse } from '../../actions/course.action';
import { selectCourses, selectError, selectLoading } from '../../selector/course.selector';

@Component({
  selector: 'app-course-details',
  standalone: false,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean> ;
  error$!: Observable<string | null>;
  course: Course = {
    id: 0, 
    title: '',
    description: '',
    duration: '',
    price: 0
  };

  constructor(private store: Store) { 
    this.courses$=this.store.select(selectCourses);
    this.loading$=this.store.select(selectLoading);
    this.error$=this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  addCourse(course: Course) :void{
    this.store.dispatch(addCourse({course}));
  }

  updateCourse(course: Course):void {
    this.store.dispatch(updateCourse({course}));
  }

  deleteCourse(id: number) :void{
   this.store.dispatch(deleteCourse({id}));
  }
}

