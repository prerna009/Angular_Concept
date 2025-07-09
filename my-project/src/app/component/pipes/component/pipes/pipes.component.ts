import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CustomPipesComponent } from '../custom-pipes/custom-pipes.component';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CustomPipesComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  price: number = 5.4566;
  currentDate: Date = new Date();
  myString: string = 'This is a STRING in Mixed CASE.';
  myNumber: number = 0.82;
  myArray: any[] = [
    'apple',
    'banana',
    'grapes',
    'orange',
    'jackfruit',
    'mango',
  ];
  myObservable: Observable<number> = of(42);
  myPromise: Promise<string> = Promise.resolve('Hello World!');
  person: any = {
    name: 'Prerna',
    age: 22,
    email: 'prernag23@gmail.com',
  };

  pobj: any[] = [
    {
      gender: 'female',
      people: [
        {
          name: 'prerna',
          age: 22,
        },
      ],
    },
    {
      gender: 'male',
      people: [
        {
          name: 'sumeet',
          age: 20,
        },
      ],
    },
  ];

  squared = of(1, 2, 3).pipe(map((x) => x * x));
  constructor() {
    this.squared.subscribe((x) => console.log('Squared of numbers :' + x));
    this.evenNumbers.subscribe((x) => console.log('Even Numbers : ' + x));
    this.merged.subscribe((x) => console.log('Merged the numbers : ' + x));
  }

  evenNumbers = of(1, 2, 3, 4, 5).pipe(filter((x) => x % 2 === 0));

  num1 = of(1, 2, 3);
  num2 = of(4, 5, 6);
  merged = merge(this.num1, this.num2);

  numbers1 = of(1, 2, 3).subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log('completed'),
  });
}
