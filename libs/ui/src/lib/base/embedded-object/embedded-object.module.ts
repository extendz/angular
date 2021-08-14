import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmbeddedObjectComponent } from './embedded-object.component';

const declarations = [EmbeddedObjectComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ExtEmbeddedObjectModule {}
