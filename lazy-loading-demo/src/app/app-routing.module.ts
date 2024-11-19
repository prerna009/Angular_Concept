import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'modulea',pathMatch:'full'},
  {path:'a',loadChildren:()=>import('./modulea/modulea.module').then(m=>m.ModuleaModule)},
  {path:'b',loadChildren:()=>import('./moduleb/moduleb.module').then(m=>m.ModulebModule)},
  { path: '**', redirectTo: 'modulea' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
