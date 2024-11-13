import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReversePipe } from './reverse.pipe';
import { FilterByLengthPipe } from './filter-by-length.pipe';
import { CharactersPipe } from './characters.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,ReversePipe,FilterByLengthPipe,CharactersPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  price: number = 2345.4566;
  currentDate: Date = new Date();
  myString:string='This is a STRING in Mixed CASE.';
  myNumber:number=0.82;
  myArray:any[]=['apple','banana','grapes','orange','jackfruit','mango'];
  myObservable:Observable<number> = of(42);
  myPromise:Promise<string> = Promise.resolve('Hello World!');
  person: any = {
    name: 'Prerna',
    age: 22,
    email: 'prernag23@gmail.com'
  };

  pobj: any[] = [
    {
      gender: 'female',
      people: [
        {
          name: 'prerna',
          age: 22
        }
      ]
    },
    {
      gender: 'male',
      people: [
        {
          name: 'sumeet',
          age: 20
        }
      ]
    }
  ];

  //Custom Pipe
  word:string='Namaste JavaScript!';
  values:string[]=['apple','banana','orange','grapes','mango','dates'];
  character:string='This is a angular application.';
}
