import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ArticleComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({course:courseReducer})
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
