import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter, TitleStrategy } from '@angular/router';
import { templatepagetitlestrategy } from './templatepagetitle.strategy';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    {provide:TitleStrategy, useClass:templatepagetitlestrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
