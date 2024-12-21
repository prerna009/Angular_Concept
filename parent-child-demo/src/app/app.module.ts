import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDemoComponent } from './component/child-demo/child-demo.component';
import { ParentDemoComponent } from './component/parent-demo/parent-demo.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildDemoComponent,
    ParentDemoComponent,
    CustomerListComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
