import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrl: './bottom-sheet.component.css',
    animations: [
        trigger('bottomSheetAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('500ms', style({ transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate('300ms', style({ transform: 'translateY(100%)' }))
            ])
        ])
    ],
    standalone: false
})
export class BottomSheetComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,private _bottomSheet:MatBottomSheet) {}

  closeBottomSheet(){
    this._bottomSheet.dismiss();
  }
}
