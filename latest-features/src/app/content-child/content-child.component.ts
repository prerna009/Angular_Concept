import { AfterContentChecked, AfterContentInit, Component, ContentChild, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements AfterContentInit,AfterContentChecked{
  //Before 
  // @ContentChild('headerTitle', {static:true}) headerTitleContent!:ElementRef;
  // @ContentChild('headerSubtitle',{static:true}) headerSubtitleContent!:ElementRef;
  // @ContentChild('navbar',{static:true}) newTitle!:ElementRef;

  // ngAfterContentInit(): void {
  //   console.log('After Content Init : '+this.headerSubtitleContent.nativeElement.textContent);
  // }
  
  // ngAfterContentChecked(): void {
  //   console.log('After Content Checked : '+this.headerSubtitleContent.nativeElement.textContent);
  //   if (this.headerSubtitleContent) {
  //     this.headerSubtitleContent.nativeElement.textContent = 'Enjoy a customized experience';
  //   }
  // }

  //New way
  private headerSubtitleContent = contentChild<ElementRef<HTMLElement>>('headerSubtitle');
  
  ngAfterContentInit(): void {
    console.log('After Content Init : '+this.headerSubtitleContent()?.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    let headerSubtitle = this.headerSubtitleContent();
    console.log('After content checked : '+ headerSubtitle?.nativeElement.textContent);
    if(headerSubtitle){
      headerSubtitle.nativeElement.textContent = 'Enjoy a customized experience!';
    }
  }
}
