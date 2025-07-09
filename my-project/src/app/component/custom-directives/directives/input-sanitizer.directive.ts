import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { SanitizerConfig } from '../model/sanitizer-config';

@Directive({
  selector: '[appInputSanitizer]',
  standalone: true
})
export class InputSanitizerDirective implements OnInit{
  @Input('appInputSanitizer') config: SanitizerConfig = {};

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.applySanitizer();
  }

  @HostListener('input')
  onInput(): void {
    this.applySanitizer();
  }

  @HostListener('blur') 
  onBlur(): void {
    this.applySanitizer();
  }

  private applySanitizer(): void {
    let value: string = this.el.nativeElement.value;
    if(!value || typeof value !== 'string') return;

    if (this.config.onlyTwoDigitNumbers) {
      value = value.replace(/\D/g,'');
      if (value.length > 2) {
        value = value.substring(0,1);
      }

      this.renderer.setProperty(this.el.nativeElement, 'value', value);
      return;
    }

    if (this.config.trim) {
      value = value.trim().replace(/\s+/g,'');
    }

    if (this.config.allowAplhanumericOnly) {
      value =  value.replace(/[^a-zA-Z0-9 ]/g,'');
    }


    if (this.config.capitalize) {
      value = value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    }

    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }
}
