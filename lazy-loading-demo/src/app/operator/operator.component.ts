import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, filter, from,map, Observable, of, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.css'
})
export class OperatorComponent{
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

  filter$=of(1,2,3,4,5).pipe(filter(even=>even%2==0),toArray());

  fetchData = (value: string) => of(`Data for ${value}`).pipe(delay(1000));
  source$ = of('A', 'B', 'C').pipe(switchMap(value => this.fetchData(value)))
    .subscribe(result => console.log(result));

  searchControl = new FormControl();
  users = [
    { name: 'Prerna Gupta', age: 28 },
    { name: 'Muskan Verma', age: 34 },
    { name: 'Ruchi Nishad', age: 22 },
    { name: 'Nisha Oza', age: 25 }, 
  ];

  filteredUsers$:Observable<any>;

  constructor() {
    this.filteredUsers$=this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query=>this.filterUsers(query)),
      filter(results=>results.length > 0),
      map(results=>results)
    );
  }

  filterUsers(query: string){
    if(!query){
      return of(this.users);
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = this.users.filter(user => user.name.toLowerCase().includes(lowercasedQuery));
    return of(filtered);
  }
}