import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css'
})
export class AngularMaterialComponent {
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
