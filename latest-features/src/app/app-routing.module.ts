import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { title } from 'process';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path:'', 
    component:HomeComponent,
  },
  {
    path:'home', 
    component:HomeComponent,
    title:'Home Page',
  },
  {
    path:'about', 
    component:AboutComponent,
    title:'About Page',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
