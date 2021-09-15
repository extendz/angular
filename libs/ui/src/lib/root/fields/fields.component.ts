import { Component, Inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  createFormControl,
  DataTableFieldMetadata,
  EnumFieldMetadata,
  ExtFormControl,
  FieldMetadata,
  FormMetadata,
} from '@extendz/core';
import { ExtDataTableComponent } from '../../data-table/data-table.component';

@Component({
  selector: 'ext-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent {
  fieldMetadata: DataTableFieldMetadata;
  formMetadata: FormMetadata;

  formControl!: ExtFormControl;

  @ViewChild('table', { static: true }) table!: ExtDataTableComponent;

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
          label: 'Boolean',
          value: 'boolean',
        },
        {
          label: 'Checkbox',
          value: 'checkbox',
        },
        {
          label: 'Color',
          value: 'color',
        },
        {
          label: 'Enum',
          value: 'enum',
        },
        {
          label: 'I8ln',
          value: 'i8ln',
        },
        {
          label: 'Number',
          value: 'number',
        },
        {
          label: 'String',
          value: 'string',
        },
        {
          label: 'Reference',
          value: 'reference',
        },
        {
          label: 'Reference List',
          value: 'referenceList',
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
      fieldMetadata: [id, label, type, rquired],
    };

    this.fieldMetadata = {
      id: 'fields',
      showToolbar: false,
      showPaginator: false,
      formMetadata: this.formMetadata,
    };
    this.formControl = createFormControl(this.fieldMetadata);
  }
}
