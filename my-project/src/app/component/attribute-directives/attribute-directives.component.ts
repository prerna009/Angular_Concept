import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  getColor(people: any) { 
    switch (people.country) {
      case 'India':
        return 'blue';
      case 'US':
        return 'green';
        default:
          return 'red';
    }
  }

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
    },
    {
      "country":"Europe",
      "people":[{
        "name":"Lisa",
        "age":34,
        "gender":"female"
      },
    {
      "name":"Jack",
      "age":38,
      "gender":"male"
    }]
    }
  ];
}
