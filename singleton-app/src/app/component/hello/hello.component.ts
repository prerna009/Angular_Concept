import { Component, Optional } from '@angular/core';
import { AppService } from '../../app.service';
import { EagerService } from '../eager/eager.service';
import { LazyService } from '../lazy/lazy.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  randomApp='App : Not defined';
  randomEager='Eager : Not defined';
  randomLazy='Lazy : Not defined';

  constructor(
    @Optional() private appService:AppService,
    @Optional() private eagerService:EagerService,
    @Optional() private lazyService:LazyService
  ){
    if(appService) this.randomApp=this.appService.RandomNo;
    if(eagerService) this.randomEager=this.eagerService.RandomNo;
    if(lazyService) this.randomLazy=this.lazyService.RandomNo;
  }

}
