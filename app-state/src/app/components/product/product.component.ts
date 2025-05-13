import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProducts, selectProductError, selectProductLoading } from '../../selectors/product.selectors';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import * as ProductActions from '../../actions/product.actions';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  
  constructor(private store: Store, private productService: ProductService) {
    this.products$ = this.store.select(selectAllProducts);
    this.loading$ = this.store.select(selectProductLoading);
    this.error$ = this.store.select(selectProductError);
  }
  
  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
     this.productService.getAll().subscribe({
       next: (products) => {
         this.store.dispatch(ProductActions.loadProductsSuccess({ products }));
       },
       error: (error) => {
         this.store.dispatch(ProductActions.loadProductsFailure({ error: error.message }));
       }
     }
    );
  }
}
