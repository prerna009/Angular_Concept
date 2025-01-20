import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class BoldDirective {

  constructor(private e1:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.e1.nativeElement,'font-weight','bold');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.e1.nativeElement,'font-weight','normal');
  }
}
