import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ExtDataTableModule } from '@extendz/ui';
import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    DataTableRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ExtDataTableModule,
  ],
})
export class DataTableModule {}
