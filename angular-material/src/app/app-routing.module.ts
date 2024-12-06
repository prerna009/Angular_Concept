import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';

const routes: Routes = [
  {path:'',component:AComponent},
  {path:'b',component:BComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
