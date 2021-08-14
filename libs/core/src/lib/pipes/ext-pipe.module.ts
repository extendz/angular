import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControlPipe } from './form-control';

const declarations = [FormControlPipe];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class ExtPipeModule {}
