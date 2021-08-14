import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ExtDataTableModule } from '../../data-table/data-table.module';
import { FieldsComponent } from './fields.component';

const declarations = [FieldsComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatButtonModule,
    ExtDataTableModule,
  ],
})
export class FieldsModule {}
