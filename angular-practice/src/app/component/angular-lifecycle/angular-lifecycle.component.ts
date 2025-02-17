import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle',
  templateUrl: './angular-lifecycle.component.html',
  styleUrl: './angular-lifecycle.component.css'
})
export class AngularLifecycleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() value: string = '';

  constructor(){
    console.log('Constructor: Component is created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges : ', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit : Component Initialized');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck : Change detection triggered');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit : Content Projected');
  }

  ngAfterContentChecked(): void {
    console.log('ngAFterContentChecked : Project content checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit : View Initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked : View Checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy : Component destroyed');
  }
}
