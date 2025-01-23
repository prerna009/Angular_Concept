import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter, TitleStrategy } from '@angular/router';
import { templatepagetitlestrategy } from './templatepagetitle.strategy';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignalComponent } from './signal/signal.component';
import { GroceryListComponent } from './signal/grocery-list/grocery-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentChildrenComponent } from './content-children/content-children.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignalComponent,
    GroceryListComponent,
    ContentChildComponent,
    ContentChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    {provide:TitleStrategy, useClass:templatepagetitlestrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
