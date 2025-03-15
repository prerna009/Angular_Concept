import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
