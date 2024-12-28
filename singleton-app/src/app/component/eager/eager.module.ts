import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerComponent } from './eager.component';
import { RouterModule, Routes } from '@angular/router';
import { EagerService } from './eager.service';

const routes: Routes = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [EagerComponent],
  providers: [EagerService]
})
export class EagerModule { }
