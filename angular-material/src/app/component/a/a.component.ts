import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']  
})
export class AComponent implements OnInit, OnDestroy {
  message: string = 'Waiting for the timer to start...';
  messageTimer: number = 0;
  timer: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef,private ngZone:NgZone) {}

  ngOnInit(): void {
    debugger
    console.log('ngOnInit called');
    this.timer = setInterval(() => {
      this.ngZone.run(()=>{
        this.messageTimer += 1;  
        this.message = `This message updates every minute. Minutes passed: ${this.messageTimer}`;
      })
      //this.cdr.detectChanges();
    }, 60000);  
    this.router.events.subscribe(() => {
      if (this.timer) {
        clearInterval(this.timer);
      }
    });
  }

  navigateToB(): void {
    this.router.navigate(['/b']);
  }  

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
