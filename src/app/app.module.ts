import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './common/card/card.component';
import { CarBrandModule } from './car-brand/car-brand.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    // ɵbm,
  ],
  imports: [
    BrowserModule,
    CarBrandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
