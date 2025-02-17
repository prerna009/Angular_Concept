import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  private isActive : boolean = false;

  constructor() { }

  @HostBinding('style.border') borderStyle !: string;

  @HostListener('click') onClick(){
    this.isActive = !this.isActive;
    this.borderStyle = this.isActive ? '5px solid blue' : '5px solid gray';
  }

}
