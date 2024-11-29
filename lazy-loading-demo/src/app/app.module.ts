import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserServiceService } from './service/user-service.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { EditComponent } from './edit/edit.component';
import { OperatorComponent } from './operator/operator.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    UserDisplayComponent,
    EditComponent,
    OperatorComponent,
    CreationOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
