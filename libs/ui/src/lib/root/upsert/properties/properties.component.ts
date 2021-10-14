/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnumFieldMetadata, FieldMetadata, FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  formMetadata: FormMetadata;
  fromGroup!: FormGroup;
  fieldNames?: string[];
  currentFieldName?: string;
  currentField?: FieldMetadata;

  constructor(@Inject(MAT_DIALOG_DATA) public fields: FieldMetadata[]) {
    // const propName = 'type';
    // type types = FieldMetadata[typeof propName];

    const label: FieldMetadata = {
      autocomplete: 'off',
      id: 'label',
      label: 'Label',
      placeholder: 'Display name for the label',
      type: 'string',
      validators: [Validators.required],
      width: { lg: '48' },
    };

    const type: EnumFieldMetadata = {
      id: 'type',
      default: 'string',
      label: 'Type',
      enums: [
        {
          label: 'String',
          value: 'string',
        },
        {
          label: 'Checkbox',
          value: 'checkbox',
        },
      ],
      placeholder: 'Field type',
      type: 'enum',
      validators: [Validators.required],
      width: { lg: '48' },
    };

    const id: FieldMetadata = {
      id: 'id',
      label: 'Id',
      type: 'string',
      width: { lg: '48' },
    };

    const rquired: FieldMetadata = {
      id: 'required',
      label: 'Required',
      type: 'boolean',
      width: { lg: '48' },
    };

    this.formMetadata = {
      id: 'properties',
      layoutAlign: { lg: 'space-between center' },
      fieldMetadata: [id, label, type, rquired],
    };
  }

  onField(field: FieldMetadata) {
    // this.currentFieldName = name;
    this.currentField = field;
    if (this.fromGroup !== undefined) {
      this.fromGroup.reset(this.currentField, { emitEvent: false });
    }
    // if (this.fromGroup !== undefined) {
    //   if (this.fromGroup.dirty) {
    //     const fm = this.fromGroup.value as FieldMetadata;
    //     this.fields[fm.id] = fm;
    //     delete this.fields[name];
    //   }
    //   this.fromGroup.reset(this.currentField, { emitEvent: false });
    //   this.updateFields(this.fields);
    // }
    // this.fromGroup.patchValue();
  }

  setFormGroup(formGroup: FormGroup) {
    this.fromGroup = formGroup;
    this.fromGroup.reset(this.currentField, { emitEvent: false });
    // this.fromGroup.valueChanges.subscribe((d: FieldMetadata) => {
    //   if (this.currentFieldName !== undefined) {
    //     if (this.fields[this.currentFieldName] !== undefined)
    //       this.fields[this.currentFieldName] = d;
    //   } else {
    //     const fm = formGroup.value as FieldMetadata;
    //     this.fields[fm.id] = fm;
    //   }
    // });
  }
}
