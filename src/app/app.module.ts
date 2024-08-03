import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NammiPipe } from './nammi.pipe';
import { SubPipe } from './sub.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NammiPipe,
    SubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
