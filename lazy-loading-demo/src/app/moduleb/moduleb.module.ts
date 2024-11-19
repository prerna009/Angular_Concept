import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulebComponent } from './moduleb.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ModulebComponent}
];

@NgModule({
  declarations: [
    ModulebComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ModulebModule { }
