import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './component/my-counter/my-counter.component';
import { ArticleComponent } from './component/article/article.component';
import { FormsModule } from "@angular/forms";
import { ArticleReducer } from './reducers/article.reducer';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({article:ArticleReducer}),
    StoreModule.forRoot({count:counterReducer})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
