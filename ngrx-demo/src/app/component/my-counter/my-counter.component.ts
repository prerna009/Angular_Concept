import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../counter.actions';

@Component({
  selector: 'app-my-counter',
  standalone: false,
  
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$:Observable<Number>
  constructor(private store:Store<{count:number}>){
    this.count$=store.select('count');
  }
  
  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
