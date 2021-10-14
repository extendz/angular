import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EmbeddedObjectListUpsertModule } from './embedded-object-list-upsert/embedded-object-list-upsert.module';
import { EmbeddedObjectListComponent } from './embedded-object-list.component';

const declarations = [EmbeddedObjectListComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    EmbeddedObjectListUpsertModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class EmbeddedObjectListModule {}
