import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
  fruitControl= new FormControl();

  fruits:string[]=['Apple','Orange','Banana','Mango','Chickoo','Pineapple'];

  filteredFruits:Observable<string[]>;

  constructor(){
    this.filteredFruits=this.fruitControl.valueChanges.pipe(
      startWith(''),
      map(value=>this.filterFruits(value))
    );
  }

  filterFruits(value:string):string[]{
    const filterValue=value.toLowerCase();
    return this.fruits.filter(fruit=>fruit.toLowerCase().includes(filterValue));
  }
}
