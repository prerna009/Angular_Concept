import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements AfterViewInit{
  @ViewChild('myButton') buttonRef !: ElementRef;
  @ViewChildren('paragraph') paragraphs !: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.paragraphs.forEach((para,index) => {
      para.nativeElement.style.color = index%2===0 ? 'maroon' : 'green';
    });
  }

  onClick(){
    this.buttonRef.nativeElement.innerText = 'Clicked!';
    this.buttonRef.nativeElement.style.backgroundColor = 'blue';
    this.buttonRef.nativeElement.style.color = 'white';
  }

}
