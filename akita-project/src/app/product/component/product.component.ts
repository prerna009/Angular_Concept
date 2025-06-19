import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductQuery } from '../query/product.query';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products$!: Observable<Product[]>;
  productForm: Partial<Product> = {};

  constructor(
    private productService: ProductService,
    private productQuery: ProductQuery
  ) {}

  ngOnInit(): void {
    this.products$ = this.productQuery.selectAll();
    this.productService.getProducts().subscribe();
  }

  addNewProduct() {
    const newProduct = {
      name: this.productForm.name,
      price: this.productForm.price,
    };
    this.productService.addProduct(newProduct as Product).subscribe(() => this.productForm = {});
  }

  edit(product: Product) {
    this.productForm = {...product };
  }

  updateProduct() {
    if (!this.productForm.id) return;
    this.productService.updateProduct(this.productForm.id, this.productForm)
    .subscribe(() => this.productForm = {});
  }

  deleteProduct(id: number) {
    this.productService.removeProduct(id).subscribe();
  }
}
