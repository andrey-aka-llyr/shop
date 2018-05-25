import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule, CartModule } from './modules';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
