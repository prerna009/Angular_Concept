import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Languages, LatestPrices, OrderBook, Student } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getLanguages():Observable<Languages[]>{
    return this.http.get<Languages[]>('http://localhost:3000/languages');
  }

  getStudent():Observable<Student>{
    return this.http.get<Student>('http://localhost:3000/student');
  }

  getOrderBook():Observable<OrderBook>{
    return this.http.get<OrderBook>('http://localhost:3000/orderBook');
  }

  getLatestPrices():Observable<LatestPrices>{
    return this.http.get<LatestPrices>('http://localhost:3000/latestPrices');
  }
}
