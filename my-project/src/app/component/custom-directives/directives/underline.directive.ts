import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {
  @Input('hoverUnderline') underlineStyle:string='underline';
  @Output() emitUnderlineEvent =  new EventEmitter<void>(); 

  constructor(private e1:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.e1.nativeElement,'text-decoration',this.underlineStyle);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.e1.nativeElement,'text-decoration','none');
    this.emitUnderlineEvent.emit();
  }
}
