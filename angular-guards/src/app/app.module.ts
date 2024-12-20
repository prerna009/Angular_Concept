import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptor } from './interceptor/auth.interceptor';
import { ToastrModule } from "ngx-toastr";
import { errorInterceptor } from './interceptor/error.interceptor';
import { tokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   timeOut: 3000,
    //   extendedTimeOut: 1000,
    //   easeTime: 300,
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    //   positionClass: 'toast-top-right',
    //   maxOpened: 1,
    //   autoDismiss: true,
    //   preventDuplicates: true,
    //   newestOnTop: true,
    // })

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([tokenInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
