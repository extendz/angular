import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnumFieldMetadata, FieldMetadata, FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent implements OnInit {
  formMetadata: FormMetadata;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Record<string, unknown>[]) {
    const id: FieldMetadata = {
      id: 'id',
      label: 'Id',
      floatLabel: 'never',
      type: 'string',
      validators: [Validators.required],
      width: { lg: '20%' },
    };

    const label: FieldMetadata = {
      autocomplete: 'off',
      floatLabel: 'never',
      id: 'label',
      label: 'Label',
      placeholder: 'Display name for the label',
      type: 'string',
      validators: [Validators.required],
      width: { lg: '20%' },
    };

    const type: EnumFieldMetadata = {
      id: 'type',
      default: 'string',
      label: 'Type',
      floatLabel: 'never',
      enums: [
        {
          displayValue: 'String',
          value: 'string',
        },
        {
          displayValue: 'Checkbox',
          value: 'checkbox',
        },
        {
          displayValue: 'Enum',
          value: 'enum',
        },
        {
          displayValue: 'Number',
          value: 'number',
        },
        {
          displayValue: 'Boolean',
          value: 'boolean',
        },
        {
          displayValue: 'Color',
          value: 'color',
        },
      ],
      placeholder: 'Field type',
      type: 'enum',
      validators: [Validators.required],
      // width: { lg: '20%' },
    };

    const rquired: FieldMetadata = {
      id: 'required',
      label: 'Required',
      floatLabel: 'never',
      type: 'boolean',
      width: { lg: '10%' },
    };

    this.formMetadata = {
      arrayName: 'properties',
      fields: [id, label, type, rquired],
    };
  }

  ngOnInit(): void {}
}
