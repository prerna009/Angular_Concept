import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit{
  userPromise!: Promise<string>;

  ngOnInit(): void {
    this.userPromise = this.getUser();
  }

  getUser(): Promise<string>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Prerna Gupta');
      },2000);
    });
  }
}
