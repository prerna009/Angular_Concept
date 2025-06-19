import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/component/book.component';
import { ProductComponent } from './product/component/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' }, 
  { path: 'book', component: BookComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', redirectTo: 'book' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
