import { AfterContentInit, Component, contentChildren, Signal } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-content-children',
  templateUrl: './content-children.component.html',
  styleUrl: './content-children.component.css'
})
export class ContentChildrenComponent implements AfterContentInit{
  childComponent : Signal<readonly ContentChildComponent[]> = contentChildren(ContentChildComponent);

  ngAfterContentInit(): void {
    console.log('Number of child component : ',this.childComponent().length);
  }
}
