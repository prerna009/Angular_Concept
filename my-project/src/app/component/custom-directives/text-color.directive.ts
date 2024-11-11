import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective {
  @Input() set appTextColor(color:string){
    this.setTextColor(color);
  }
  
  constructor(private e1:ElementRef,private renderer:Renderer2) {}

  private setTextColor(color:string){
    this.renderer.setStyle(this.e1.nativeElement,'color',color);
  }

}
