import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css',
})
export class CountComponent implements OnInit {
  count = signal(0);
  writableCount: WritableSignal<number> = signal(0);
  doublecount: Signal<number> = computed(() => this.writableCount() * 2);
  showCount = signal(false);

  ngOnInit(): void {
    //Example - 1
    console.log('Initialized Count value is: ' + this.count()); // initial count value
    this.count.set(3);
    console.log('After Set Count value is: ' + this.count()); //set count value
    this.count.update((value) => value * 3);
    console.log('Update Count value is: ' + this.count()); //update last count value multiply by 3

    //Example - 2
    console.log(`Start Double Count: ` + this.doublecount()); //Starting double count value
    this.writableCount.set(3); //set new value
    // After changing writable signal value the double count value is also update
    console.log(`Update Double Count:` + this.doublecount()); 

    //show the count value based on showCount boolean value condition
    const conditionalCount = computed(() => {
      if (this.showCount()) {
        return `Count value is ${this.count()}`;
      } else {
        return `Nothing to see!`;
      }
    });

    console.log('Conditional count - ', conditionalCount());
    this.showCount.set(true); // set the shwoCount value is true
    console.log('Conditional count - ', conditionalCount());
  }
}
