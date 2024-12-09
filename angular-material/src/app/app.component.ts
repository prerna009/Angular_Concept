import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { first, map, Observable, startWith } from 'rxjs';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';

  constructor(private _bottomSheet:MatBottomSheet){}

  openBottomSheet():void{
    this._bottomSheet.open(BottomSheetComponent,{
      panelClass: 'custom-bottom-sheet',    
      backdropClass: 'custom-backdrop',                     
      // disableClose: false,                  
      direction: 'ltr',                     
      // ariaLabel: 'My Custom Bottom Sheet', 
      data: { message: 'Hello from Angular Material Bottom Sheet!' },
    });
  }
}
