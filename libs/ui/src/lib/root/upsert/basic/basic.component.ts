import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  formMetadata: FormMetadata;
  fromGroup!: FormGroup;

  @Output() form = new EventEmitter<FormGroup>();

  constructor() {
    this.formMetadata = {
      layoutAlign: { lg: 'space-between center' },
      fieldMetadata: [
        {
          autocomplete: 'off',
          default: 'address',
          id: 'id',
          label: 'Id',
          placeholder: 'Unique name for the field',
          type: 'string',
          validators: [Validators.required],
          width: { lg: '48' },
        },
        {
          default: 'Addresses',
          id: 'label',
          label: 'Label',
          placeholder: 'Display label',
          type: 'string',
          validators: [Validators.required],
          width: { lg: '48' },
        },
        {
          default: 'addresses',
          id: 'url',
          label: 'URL',
          placeholder: 'URL to communicate',
          type: 'string',
          validators: [Validators.required],
          width: { lg: '32' },
        },
        {
          default: '#ff0000',
          id: 'backgroundColor',
          label: 'Background Color',
          placeholder: 'Background color for the tile',
          type: 'color',
          validators: [Validators.required],
          width: { lg: '32' },
        },
        {
          default: '#ffffff',
          id: 'color',
          label: 'Icon color',
          placeholder: 'Color for the icon',
          type: 'color',
          validators: [Validators.required],
          width: { lg: '32' },
        },
        {
          id: 'icon',
          label: 'Icon',
          placeholder: 'Icon for the tile',
          type: 'icon',
          validators: [Validators.required],
          width: { lg: '32' },
        },
      ],
    };
  }
}
