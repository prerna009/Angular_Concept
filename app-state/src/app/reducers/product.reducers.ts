import { Product } from "../models/product";
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from "../actions/product.actions";

export interface ProductState{
    products: Product[];
    loading: boolean;
    error: any;
}

export const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProducts, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(ProductActions.loadProductsSuccess, (state, {products}) => ({
        ...state,
        loading: false,
        products
    })),
    on(ProductActions.loadProductsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    }))
);