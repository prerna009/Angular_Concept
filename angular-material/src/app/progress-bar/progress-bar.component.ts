import { Component } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.css',
    standalone: false
})
export class ProgressBarComponent {

  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  mode_1:ProgressSpinnerMode='determinate';
}
