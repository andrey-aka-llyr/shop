import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductModule, CartModule, CoreModule, DemoModule } from './modules';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductModule,
    CartModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
