import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const declarations = [MapComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, MatTableModule, MatInputModule, ReactiveFormsModule],
})
export class ExtMapModule {}
