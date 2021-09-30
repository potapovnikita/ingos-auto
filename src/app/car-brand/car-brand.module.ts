import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarBrandComponent } from './car-brand.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IngoCheckboxModule, IngoDatePickerModule, IngoErrorsModule, IngoInputModule, IngoNextFocusModule } from '@ingos/ui-next';



@NgModule({
  declarations: [
    CarBrandComponent
  ],
  exports: [
    CarBrandComponent
  ],
  imports: [
    CommonModule,
    IngoInputModule,
  ]
})
export class CarBrandModule { }
