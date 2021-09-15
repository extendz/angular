import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormArrayPipe, FormControlPipe, FormGroupPipe } from './form-control';

const declarations = [FormControlPipe, FormGroupPipe, FormArrayPipe];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class ExtPipeModule {}
