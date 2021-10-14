import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ExtEnumModule } from '../../enum/enum.module';
import { ExtInputTextModule } from '../../input-text/input-text.module';
import { JsonModule } from '../../json/json.module';
import { ExtNumberModule } from '../../number/number.module';
import { EmbeddedObjectListUpsertComponent } from './embedded-object-list-upsert.component';

@NgModule({
  declarations: [EmbeddedObjectListUpsertComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    JsonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    ExtInputTextModule,
    ExtNumberModule,
    ExtEnumModule,
    ReactiveFormsModule,
  ],
})
export class EmbeddedObjectListUpsertModule {}
