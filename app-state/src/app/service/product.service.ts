import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _apiurl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    console.log('ProductEffects initialized');
    return this.http.get<Product[]>(this._apiurl);
  }
}
