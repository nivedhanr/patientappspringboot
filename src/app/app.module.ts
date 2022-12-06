import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
