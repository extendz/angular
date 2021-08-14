import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtPipeModule } from '@extendz/core';
import { ExtCheckboxModule } from '../../base/checkbox/checkbox.module';
import { ExtColorPickerModule } from '../../base/color-picker/color-picker.module';
import { ExtEmbeddedObjectModule } from '../../base/embedded-object/embedded-object.module';
import { ExtEnumModule } from '../../base/enum/enum.module';
import { ExtExpandableModule } from '../../base/expandable/expandable.module';
import { ExtInputTextModule } from '../../base/input-text/input-text.module';
import { ExtSvgIconModule } from '../../base/svg-icon/svg-icon.module';
import { BasicFormComponent } from './basic-form.component';

const declarations = [BasicFormComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ExtColorPickerModule,
    ExtSvgIconModule,
    ExtPipeModule,
    ExtInputTextModule,
    ExtCheckboxModule,
    ExtExpandableModule,
    ExtEmbeddedObjectModule,
    ExtEnumModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class ExtBasicFormModule {}
