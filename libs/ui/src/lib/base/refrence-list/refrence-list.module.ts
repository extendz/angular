import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefrenceListComponent } from './refrence-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { ReferenceListUpsertModule } from './reference-list-upsert/reference-list-upsert.module';

const declarations = [RefrenceListComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReferenceListUpsertModule,
  ],
})
export class ExtRefrenceListModule {}
