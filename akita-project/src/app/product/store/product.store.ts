import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from '../model/product';

export interface ProductState extends EntityState<Product,number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductStore extends EntityStore<ProductState> {
  
  constructor() {
    super();
  }

}
