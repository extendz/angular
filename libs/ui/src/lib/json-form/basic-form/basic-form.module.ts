import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExtPipeModule } from '@extendz/core';
import { ExtCheckboxModule } from '../../base/checkbox/checkbox.module';
import { ExtColorPickerModule } from '../../base/color-picker/color-picker.module';
import { EmbeddedObjectListModule } from '../../base/embedded-object-list/embedded-object-list.module';
import { ExtEmbeddedObjectModule } from '../../base/embedded-object/embedded-object.module';
import { ExtEnumModule } from '../../base/enum/enum.module';
import { ExtExpandableModule } from '../../base/expandable/expandable.module';
import { ExtInputTextModule } from '../../base/input-text/input-text.module';
import { ExtSvgIconModule } from '../../base/svg-icon/svg-icon.module';
import { ExtBasicFormComponent } from './basic-form.component';

const declarations = [ExtBasicFormComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    EmbeddedObjectListModule,
    ExtCheckboxModule,
    ExtColorPickerModule,
    ExtEmbeddedObjectModule,
    ExtEnumModule,
    ExtExpandableModule,
    ExtInputTextModule,
    ExtPipeModule,
    ExtSvgIconModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
})
export class ExtBasicFormModule {}
