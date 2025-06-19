import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { ProductState, ProductStore } from "../store/product.store";

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {
    constructor(protected override store: ProductStore) {
        super(store);
    }
}
