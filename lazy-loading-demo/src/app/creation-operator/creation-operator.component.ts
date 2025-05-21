import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  debounceTime,
  delay,
  distinct,
  filter,
  from,
  fromEvent,
  interval,
  map,
  mergeMap,
  of,
  pluck,
  scan,
  skip,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styleUrl: './creation-operator.component.css',
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
  latestValue: string = '';
  concatValue: string = '';
  filter$: string = '';
  take$: string = '';
  takeUntil$: string = '';
  skip$: string = '';
  distinct$: string = '';
  pluck$: string = '';
  scan$: string = '';

  ngOnInit(): void {
    this.ofOperator();
    this.fromOperator();
    this.intervalOperator();
    this.timerOperator();
    this.fromEventOperator();
    this.mergeMapOperator();
    this.switchMapOperator();
    this.concatMapOperator();
    this.filterOperator();
    this.takeOperator();
    this.takeUntilOperator();
    this.skipOperator();
    this.distinctOperator();
    this.pluckOperator();
    this.scanOperator();
  }

  ofOperator(): void {
    of(1, 2, 3, 4, 5)
      .pipe(map((num) => num * 10)) //transform each value by multiplying by 10
      .subscribe((value) => {
        this.of$ += `${value}` + ' ';
      });
  }

  fromOperator(): void {
    from([1, 2, 3, 4, 5])
      .pipe(map((num) => num * 5)) //transform each value by multiplying by 5
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
      .pipe(mergeMap((value) => of(`${value}-Transformed`).pipe(delay(1000))))
      .subscribe((result) => {
        this.results += `${result} `;
      });
  }

  switchMapOperator(): void {
    const outer$ = interval(200).pipe(take(5)); //emits the value 0...4 every 2ms
    outer$
      .pipe(
        switchMap((outerValue) =>
          of(`Inner Observable for ${outerValue}`).pipe(delay(100))
        )
      )
      .subscribe((result) => {
        this.latestValue = result;
      });
  }

  concatMapOperator(): void {
    const source$ = of('X', 'Y', 'Z');
    source$
      .pipe(
        concatMap((value) => of(`Transformed Value ${value}`).pipe(delay(1000)))
      )
      .subscribe((result) => {
        this.concatValue = result;
      });
  }

  //Filtering Operator
  filterOperator(): void {
    const number$ = of(1, 42, 730, 4, 5, 611, 7787, 8);
    number$.pipe(filter((value) => value % 2 === 0)).subscribe((result) => {
      this.filter$ += `${result}  `;
    });
  }

  takeOperator(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);
    source$.pipe(take(3)).subscribe((result) => {
      this.take$ += `${result} `;
    });
  }

  takeUntilOperator(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);
    const stop$ = timer(3000); //stop after 3s
    source$.pipe(takeUntil(stop$)).subscribe((result) => {
      this.takeUntil$ += `${result} `;
    });
  }

  skipOperator(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);
    source$
      .pipe(skip(2)) //skip the first 2 value and remaining value are print
      .subscribe((result) => {
        this.skip$ += `${result} `;
      });
  }

  distinctOperator(): void {
    const source$ = of(1, 2, 2, 4, 21, 4, 21, 32, 12, 45, 65, 3, 2, 5, 3); //it take only unique value
    source$.pipe(distinct()).subscribe((value) => {
      this.distinct$ += `${value} `;
    });
  }

  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  results$: string[] = [];

  constructor() {
    this.searchTerm
      .pipe(throttleTime(500), debounceTime(300))
      .subscribe((value) => {
        this.results$ = this.mockSearch(value);
      });
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.next(inputElement.value);
  }

  mockSearch(searchTerm: string): string[] {
    const allData = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Grape',
      'Kiwi',
      'Lemon',
      'Mango',
    ];
    if (!searchTerm) return [];
    return allData.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //Transforming Operator
  pluckOperator() {
    of({ name: 'Alice' }, { name: 'Bob' })
      .pipe(pluck('name')) //it extracts the specifiedd value of an object
      .subscribe((value) => {
        this.pluck$ += value + ' ';
      });
  }

  scanOperator() {
    of(1, 2, 3)
      .pipe(scan((acc, val) => acc + val, 0)) //it scan the value of every accumulates
      .subscribe((value) => {
        this.scan$ += value + ' ';
      });
  }
}
