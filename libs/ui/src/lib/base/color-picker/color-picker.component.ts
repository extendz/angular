import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Color, FieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';
import { colors } from './colors.helper';

@Component({
  selector: 'ext-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent extends BaseInputComponent {
  columns = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'a100',
    'a200',
    'a400',
    'a700',
  ];

  colors = colors;
  fieldMetaData?: FieldMetadata;
  @ViewChild('dialog') dialog!: TemplateRef<any>;

  ref!: MatDialogRef<ColorPickerComponent>;
  constructor(private matDialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.fieldMetaData = this.control.metadata;
  }

  openPopOver(event: MouseEvent) {
    event.preventDefault();
    this.ref = this.matDialog.open(this.dialog);
  }

  onColor(color: Color) {
    this.ref.close();
    this.control.setValue(color.hex);
  }
}
