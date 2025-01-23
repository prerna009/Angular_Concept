import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  items = [
    {name:'Product A',price:10},
    {name:'Product B',price:20},
    {name:'Product C', price:30},
  ];

  itemList = signal(this.items);

  totalPrice = computed(()=>{
    return this.itemList().reduce((acc,curr)=>acc+curr.price,0);
  });

  removeItem(item : any){
    this.itemList.set(this.itemList().filter((i)=>i!==item));
  }
}
