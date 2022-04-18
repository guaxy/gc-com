import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GcWebComponentsModule } from 'gc-web-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GcWebComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
