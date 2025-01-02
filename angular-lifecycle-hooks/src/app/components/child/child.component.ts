import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() myCounter!:number;
  @Input() numbers!:number[];

  public changelog:string[]=[];

  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes){
      const change: SimpleChange=changes[propName];
      const currentValue = JSON.stringify(change.currentValue);
      const previousValue = JSON.stringify(change.previousValue);

      this.changelog.push(
        `ngOnChanges ${propName}: currentValue = ${currentValue} , previousValue = ${previousValue} , firstChange = ${change.firstChange}`
      );
    }
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.changelog.push('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.changelog.push(`ngDoCheck : ${this.numbers.toString()}`);
  }

  ngAfterContentInit():void{
    console.log('ngAfterContentInit');
    this.changelog.push('ngAfterContentInt');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.changelog.push('ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInt');
    this.changelog.push('ngAfterViewInt');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.changelog.push('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.changelog.push('ngOnDestroy');
  }
}
