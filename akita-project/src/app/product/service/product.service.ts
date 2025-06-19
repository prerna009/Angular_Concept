import { Injectable } from '@angular/core';
import { ProductStore } from '../store/product.store';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = 'http://localhost:3000/products';

  constructor(private productStore: ProductStore, private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.api).pipe(
      tap(products => this.productStore.set(products))
    );
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.api, product).pipe(
      tap(newProduct => this.productStore.add(newProduct))
    );
  }

  updateProduct(id: number, updatedData: Partial<Product>) {
    return this.http.put<Product>(`${this.api}/${id}`, updatedData).pipe(
      tap(updatedProduct => this.productStore.update(id, updatedProduct))
    )
  }

  removeProduct(id: number) {
    return this.http.delete<Product>(`${this.api}/${id}`).pipe(
      tap(() => this.productStore.remove(id))
    );
  }
}
