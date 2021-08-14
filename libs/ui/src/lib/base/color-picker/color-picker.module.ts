import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ExtPipesModule } from '@extendz/pipe';
import { ColorPickerComponent } from './color-picker.component';

const declarations = [ColorPickerComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ExtPipesModule,
    // CDK
    OverlayModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class ExtColorPickerModule {}
