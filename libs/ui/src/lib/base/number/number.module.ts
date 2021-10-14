import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const declarations = [NumberComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ExtNumberModule {}
