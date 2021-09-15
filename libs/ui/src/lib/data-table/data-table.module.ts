import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExtPipeModule } from '@extendz/core';
import { ExtCheckboxModule } from '../base/checkbox/checkbox.module';
import { ExtColorPickerModule } from '../base/color-picker/color-picker.module';
import { EmbeddedObjectListModule } from '../base/embedded-object-list/embedded-object-list.module';
import { ExtEmbeddedObjectModule } from '../base/embedded-object/embedded-object.module';
import { ExtEnumModule } from '../base/enum/enum.module';
import { ExtInputTextModule } from '../base/input-text/input-text.module';
import { ExtSvgIconModule } from '../base/svg-icon/svg-icon.module';
import { ExtDataTableComponent } from './data-table.component';

const declarations = [ExtDataTableComponent];

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
    ExtInputTextModule,
    ExtPipeModule,
    ExtSvgIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
})
export class ExtDataTableModule {}
