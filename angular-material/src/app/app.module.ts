import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from "@angular/material/tree";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule  } from "@angular/material/slider";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from "@angular/material/radio";
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponent } from './dialog/dialog.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTimepickerModule } from "@angular/material/timepicker";
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from "@angular/material/stepper";
import { TreeComponent } from './tree/tree.component';
@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    AngularMaterialComponent,
    BottomSheetComponent,
    ButtonComponent,
    CardComponent,
    DialogComponent,
    GridListComponent,
    ListComponent,
    MenuComponent,
    ProgressBarComponent,
    UserTableComponent,
    DateTimePickerComponent,
    StepperComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTreeModule,
    MatTableModule,
    MatTimepickerModule,
    MatStepperModule,
    MatTreeModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
