import { Component } from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../custom-pipes/reverse.pipe';
import { FilterByLengthPipe } from '../../custom-pipes/filter-by-length.pipe';
import { CharactersPipe } from '../../custom-pipes/characters.pipe';
import { SmartModelFilterPipe } from '../../custom-pipes/smart-model-filter.pipe';
import { AppendPipe } from '../../custom-pipes/append.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReversePipe,
    FilterByLengthPipe,
    CharactersPipe,
    AppendPipe,
    SmartModelFilterPipe,
  ],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css',
})
export class CustomPipesComponent {
  word: string = 'Namaste JavaScript!';
  values: string[] = ['apple', 'banana', 'orange', 'grapes', 'mango', 'dates'];
  character: string = 'This is a angular application.';
  title: string = 'Hello';

  searchText: string = '';
  users: User[] = [
    {
      id: 1,
      name: 'Prerna Gupta',
      age: 23,
      email: 'prernag022@gmail.com',
      address: {
        city: 'Mumbai',
        country: 'India',
      },
    },
    {
      id: 2,
      name: 'Mark John',
      age: 56,
      email: 'john234@gmail.com',
      address: {
        city: 'Paris',
        country: 'France',
      },
    },
    {
      id: 3,
      name: 'Nike',
      age: 34,
      email: 'nike44@gmail.com',
      address: {
        city: 'NewYork',
        country: 'USA',
      },
    },
    {
      id: 4,
      name: 'Daisy',
      age: 20,
      email: 'daisy445@gmail.com',
      address: {
        city: 'London',
        country: 'UK',
      },
    },
    {
      id: 5,
      name: 'Taechyon',
      age: 23,
      email: 'teachyon889@gmail.com',
      address: {
        city: 'Seoul',
        country: 'South Korea',
      },
    },
  ];
}
