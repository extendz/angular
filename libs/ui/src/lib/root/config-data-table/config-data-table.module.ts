import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ExtBasicFormModule } from '../../json-form/basic-form/basic-form.module';
import { ConfigDataTableComponent } from './config-data-table.component';

const declarations = [ConfigDataTableComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FlexLayoutModule,
    ExtBasicFormModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class ConfigDataTableModule {}
