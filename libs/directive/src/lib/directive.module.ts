import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialElevationDirective } from './material-elevation.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MaterialElevationDirective],
  exports: [MaterialElevationDirective],
})
export class ExtDirectiveModule {}
