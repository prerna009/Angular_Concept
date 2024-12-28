import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { FormsModule } from "@angular/forms";
import { AppService } from './app.service';
import { EagerComponent } from './component/eager/eager.component';
import { LazyComponent } from './component/lazy/lazy.component';
import { EagerModule } from './component/eager/eager.module';
import { LazyModule } from './component/lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
