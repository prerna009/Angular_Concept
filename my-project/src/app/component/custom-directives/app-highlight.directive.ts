import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  constructor(private eleRef: ElementRef) {}
  
  @HostListener('click') onClick(){
    this.eleRef.nativeElement.style.background='blue';
  }

  @HostListener('mouseout') onMouseMove(){
    this.eleRef.nativeElement.style.color='white';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.eleRef.nativeElement.style.color='pink';
  }

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }
}
