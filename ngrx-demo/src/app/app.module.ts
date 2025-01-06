import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './component/my-counter/my-counter.component';
import { ArticleComponent } from './component/article/article.component';
import { FormsModule } from "@angular/forms";
import { ArticleReducer } from './reducers/article.reducer';
import { counterReducer } from './reducers/counter.reducer';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { courseReducer } from './reducers/course.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TodoReducer } from './store/reducers/todo.reducer';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TodoListComponent } from './component/todo-list/todo-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ArticleComponent,
    CourseDetailsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //StoreModule.forRoot({course:courseReducer})
    StoreModule.forRoot({todos:TodoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
