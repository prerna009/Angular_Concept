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
}
