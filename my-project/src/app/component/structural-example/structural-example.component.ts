import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-structural-example',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './structural-example.component.html',
  styleUrl: './structural-example.component.css'
})
export class StructuralExampleComponent {

  person:any[]=[
    {
      "country":"India",
      "people":[
        {
          "name":"Prerna",
          "age":22,
          "gender":"female"
        },
        {
          "name":"Sandhaya",
          "age":24,
          "gender":"female"
        },
      ]
    },
    {
      "country":"US",
      "people":[
        {
          "name":"John",
          "age":30,
          "gender":"male"
        },
        {
          "name":"Noa",
          "age":35,
          "gender":"male"
        }
      ]
    }
  ];
}
