import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleaComponent } from './modulea.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ModuleaComponent}
];

@NgModule({
  declarations: [
    ModuleaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ModuleaModule { }
