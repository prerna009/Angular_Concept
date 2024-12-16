import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ModuleAuthService } from './service/module-auth.service';
import { categoryGuard } from './guards/category.guard';
import { productGuard } from './guards/product.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'category',
    loadChildren:()=>import('./component/category/category.module').then(m=>m.CategoryModule),
    canActivate:[categoryGuard]
  },
  {path:'product',
    loadChildren:()=>import('./component/product/product.module').then(m=>m.ProductModule),
    canActivate:[productGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
