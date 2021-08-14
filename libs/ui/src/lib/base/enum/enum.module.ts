import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumComponent } from './enum.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtPipesModule } from '@extendz/pipe';

const declarations = [EnumComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    ExtPipesModule,
    MatFormFieldModule,
  ],
})
export class ExtEnumModule {}
