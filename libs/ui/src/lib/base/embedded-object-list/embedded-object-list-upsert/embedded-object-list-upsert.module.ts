import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SimpleFormModule } from '../../../json-form/simple-form/simple-form.module';
import { EmbeddedObjectListUpsertComponent } from './embedded-object-list-upsert.component';

@NgModule({
  declarations: [EmbeddedObjectListUpsertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
    SimpleFormModule,
    MatButtonModule,
  ],
})
export class EmbeddedObjectListUpsertModule {}
