import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, from, fromEvent, interval, map, mergeMap, of, switchMap, take, timer } from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styleUrl: './creation-operator.component.css'
})
export class CreationOperatorComponent implements OnInit {

  @ViewChild('clickMe', { static: true }) clickMe!: ElementRef;

  //Creation Operator
  of$: string = '';
  from$: string = '';
  interval$: number | string = 'Waiting...';
  timer$: number | string = 'Waiting...';
  fromEvent$: string = 'Click the button!';
  results: string = '';
  latestValue:string='';
  concatValue:string='';

  ngOnInit(): void {
    this.ofOperator();
    this.fromOperator();
    this.intervalOperator();
    this.timerOperator();
    this.fromEventOperator();
    this.mergeMapOperator();
    this.switchMapOperator();
    this.concatMapOperator();
  }

  ofOperator(): void {
    of(1, 2, 3, 4, 5)
      .pipe(map(num => num * 10)) //transform each value by multiplying by 10
      .subscribe((value) => {
        this.of$ += `${value}` + ' ';
      });
  }

  fromOperator(): void {
    from([1, 2, 3, 4, 5])
      .pipe(map(num => num * 5)) //transform each value by multiplying by 5
      .subscribe((result) => {
        this.from$ += `${result} `;
      });
  }

  intervalOperator(): void {
    interval(500)
      .pipe(take(5))
      .subscribe((value) => {
        this.interval$ = value;
      });
  }

  timerOperator(): void {
    timer(2000, 1000) //first value take 2s and after that take 1s
      .pipe(take(3))
      .subscribe((value) => {
        this.timer$ = value;
      });
  }

  fromEventOperator(): void {
    if (this.clickMe) {
      fromEvent(this.clickMe.nativeElement, 'click').subscribe(() => {
        this.fromEvent$ = 'Button Clicked!';
      });
    }
  }

  //Transformed Operator
  mergeMapOperator(): void {
    const source$ = of('A', 'B', 'C');
    source$
      .pipe(
        mergeMap((value) => of(`${value}-Transformed`).pipe(delay(1000)))
      )
      .subscribe((result) => {
        this.results += `${result} `;
      });
  }

  switchMapOperator():void{
    const outer$=interval(2000).pipe(take(5)); //emits the value 0...4 every 2s
    outer$.pipe(
      switchMap((outerValue)=>of(`Inner Observable for ${outerValue}`).pipe(delay(1000)))
    )
    .subscribe((result)=>{
      this.latestValue=result;
    });
  }

  concatMapOperator():void{
    const source$=of('X','Y','Z');
    source$.pipe(
      concatMap((value)=>of(`Transformed Value ${value}`).pipe(delay(1000)))
    )
    .subscribe((result)=>{
      this.concatValue=result;
    });
  }

}
