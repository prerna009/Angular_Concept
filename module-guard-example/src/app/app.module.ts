import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CategoryModule } from './component/category/category.module';
import { ProductModule } from './component/product/product.module';
import { ModuleAuthService } from './service/module-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryModule,
    ProductModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ModuleAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
