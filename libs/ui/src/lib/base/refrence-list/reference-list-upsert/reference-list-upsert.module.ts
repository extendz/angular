import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SearchBarModule } from '../../../search-bar/search-bar.module';
import { ReferenceListUpsertComponent } from './reference-list-upsert.component';

const declarations = [ReferenceListUpsertComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    SearchBarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
})
export class ReferenceListUpsertModule {}
