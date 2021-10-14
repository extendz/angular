import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SimpleFormModule } from '../../../json-form/simple-form/simple-form.module';
import { EmbeddedObjectUpsertComponent } from './embedded-object-upsert.component';

const declarations = [EmbeddedObjectUpsertComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    SimpleFormModule,
    ReactiveFormsModule,
  ],
})
export class EmbeddedObjectUpsertModule {}
