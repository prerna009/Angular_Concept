import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerModule } from './component/eager/eager.module';
import { LazyModule } from './component/lazy/lazy.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),EagerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
