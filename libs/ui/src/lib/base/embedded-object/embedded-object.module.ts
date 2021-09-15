import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EmbeddedObjectUpsertModule } from './embedded-object-upsert/embedded-object-upsert.module';
import { EmbeddedObjectComponent } from './embedded-object.component';

const declarations = [EmbeddedObjectComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    EmbeddedObjectUpsertModule,
  ],
})
export class ExtEmbeddedObjectModule {}
