import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrl: './subject-demo.component.css'
})
export class SubjectDemoComponent {
  observable=new Observable<number>(ele=>ele.next(Math.random())); //observable example

  firstObservable=this.observable.subscribe(result=>console.log(`first observable ${result}`));
  secondObservable=this.observable.subscribe(result=>console.log(`second observable ${result}`));

  subject=new Subject<number>(); //subject examples

  firstSubject=this.subject.subscribe(result=>console.log(`first subject ${result}`));
  secondSubject=this.subject.subscribe(result=>console.log(`second subject ${result}`));
  subjectValue=this.subject.next(Math.random());

  behaviorSubject=new BehaviorSubject<number>(123); //behaviorSubject examples

  firstBehaviorSubject=this.behaviorSubject.subscribe(result=>console.log(`first behaviorSubject ${result}`));
  behaviorSubjectValue=this.behaviorSubject.next(456);
  secondBehaviorSubject=this.behaviorSubject.subscribe(result=>console.log(`second behaviorSubject ${result}`));

  replaySubject=new ReplaySubject(2); //replaysubject examples
  replaySubjectFirstValue=this.replaySubject.next(111);
  replaySubjectSecondValue=this.replaySubject.next(222);

  firstReplaySubject=this.replaySubject.subscribe(e=>console.log(`first replay subject ${e}`));

  replaySubjectThirdValue=this.replaySubject.next(333);
  secondreplaySubject=this.replaySubject.subscribe(e=>console.log(`second replay subject ${e}`));

  replaySubjectFourthValue=this.replaySubject.next(444);

  asyncSubject=new AsyncSubject<number>(); //async subject examples
  firstAsync=this.asyncSubject.subscribe(e=>console.log(`first async subject value is ${e}`));

  asyncFirstValue=this.asyncSubject.next(111);
  asyncSecondValue=this.asyncSubject.next(222);
  syncThirdValue=this.asyncSubject.next(333);

  //asynComplete=this.asyncSubject.complete(); //latest value 333
  secondAsync=this.asyncSubject.subscribe(e=>console.log(`second async subject value is ${e}`));
  asyncFourthValue=this.asyncSubject.next(444);
  asynComplete=this.asyncSubject.complete(); //latest value 444

}
