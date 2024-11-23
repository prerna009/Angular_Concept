import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  // {path:'',redirectTo:'modulea',pathMatch:'full'},
  // {path:'a',loadChildren:()=>import('./modulea/modulea.module').then(m=>m.ModuleaModule)},
  // {path:'b',loadChildren:()=>import('./moduleb/moduleb.module').then(m=>m.ModulebModule)},
  // { path: '**', redirectTo: 'modulea' },
  { path: 'home', component: ReactiveFormComponent },
  { path: 'register', component: UserDisplayComponent },
  {path:'edit/:id',component:EditComponent},
  { path: '', redirectTo: '/display', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
