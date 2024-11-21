import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomeModule } from './home/home.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './services/employee.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    PagenotfoundComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactUsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
