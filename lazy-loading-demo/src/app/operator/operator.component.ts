import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, from,map, of, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.css'
})
export class OperatorComponent{
  constructor(private http: HttpClient) { }

  numbers$ = of(1, 2, 3, 4).pipe(
    map(num => num * 2),
    toArray()
  );  // output in html

  fruits=from(['apple','banana','orange']).pipe(map(value=>value),toArray());
  
  numbers = of(1, 2, 3, 4, 5).pipe(map(num => num * 2)).subscribe({
    next: result => {
      console.log(result);
    }
  }); //output in console

  fetchData = (value: string) => of(`Data for ${value}`).pipe(delay(1000));

  source$ = of('A', 'B', 'C').pipe(switchMap(value => this.fetchData(value)))
    .subscribe(result => console.log(result));

  searchControl = new FormControl();
  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(300), 
    switchMap(query => this.http.get(`http://localhost:3000/register?q=${query}`)),
    toArray()
  );
}