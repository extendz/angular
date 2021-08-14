import { Component, OnInit } from '@angular/core';
import { FieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent extends BaseInputComponent implements OnInit {
  fieldMetaData?: FieldMetadata;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fieldMetaData = this.control.metadata;
  }
}
