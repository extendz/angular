import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PropertiesComponent } from './properties.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExtBasicFormModule } from '../../../json-form/basic-form/basic-form.module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
const declarations = [PropertiesComponent];

@NgModule({
  declarations,
  exports: declarations,
  imports: [
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    ExtBasicFormModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FlexLayoutModule,
  ],
})
export class ExtPropertiesModule {}
