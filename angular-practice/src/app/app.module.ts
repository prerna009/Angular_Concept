import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLifecycleComponent } from './component/angular-lifecycle/angular-lifecycle.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { ViewComponent } from './component/view/view.component';
import { HighlightDirective } from './directive/highlight.directive';
import { ToggleDirective } from './directive/toggle.directive';
import { LifecycleCounterExampleComponent } from './component/lifecycle-counter-example/lifecycle-counter-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLifecycleComponent,
    PipeComponent,
    ViewComponent,
    HighlightDirective,
    ToggleDirective,
    LifecycleCounterExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
