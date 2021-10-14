import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtBasicFormModule } from '@extendz/ui';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    ExtBasicFormModule,
  ],
})
export class FormModule {}
