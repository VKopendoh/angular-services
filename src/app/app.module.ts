import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppCounterService} from './services/app-counter.service';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // Services can be injected with declaration in providers, but it's not necessary
    // in other hand we can use @Injectable({providedIn: 'root'}) annotation on service
    /*AppCounterService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
