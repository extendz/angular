import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtPipeModule } from '@extendz/core';
import { ExtCheckboxModule } from '../../base/checkbox/checkbox.module';
import { ExtColorPickerModule } from '../../base/color-picker/color-picker.module';
import { ExtEnumModule } from '../../base/enum/enum.module';
import { ExtInputTextModule } from '../../base/input-text/input-text.module';
import { ExtMapModule } from '../../base/map/map.module';
import { ExtSvgIconModule } from '../../base/svg-icon/svg-icon.module';
import { SimpleFormComponent } from './simple-form.component';

const declarations = [SimpleFormComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ExtColorPickerModule,
    ExtPipeModule,
    ExtSvgIconModule,
    ExtInputTextModule,
    ExtCheckboxModule,
    ExtEnumModule,
    FlexLayoutModule,
    ExtMapModule,
    ReactiveFormsModule,
  ],
})
export class SimpleFormModule {}
