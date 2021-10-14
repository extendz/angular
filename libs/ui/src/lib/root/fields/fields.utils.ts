import { Validators } from '@angular/forms';
import {
  DataTableFieldMetadata,
  EmbeddedObjectListFieldMetadata,
  EnumFieldMetadata,
  FieldMetadata,
} from '@extendz/core';

export function getFieldsFormMetadata(): DataTableFieldMetadata {
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
        label: 'Embedded ',
        value: 'embedded',
      },
      {
        label: 'Embedded List',
        value: 'embeddedlist',
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
  };

  const rquired: FieldMetadata = {
    id: 'required',
    label: 'Required',
    floatLabel: 'never',
    type: 'boolean',
    width: { lg: '10%' },
  };

  const formMetadata = {
    id: 'feilds',
    fieldMetadata: [id, label, type, rquired],
  };

  return {
    id: 'fields',
    label: 'Fields',
    showToolbar: false,
    showPaginator: false,
    formMetadata,
  };
}

export function getProjectionFormMetadata() {
  const name: FieldMetadata = {
    id: 'name',
    label: 'Name',
    floatLabel: 'never',
    type: 'string',
    validators: [Validators.required],
    width: { lg: '20%' },
  };

  const field_metadata: EmbeddedObjectListFieldMetadata = {
    id: 'fieldMetadata',
    label: 'Field Metadata',
    type: 'embedded-object-list',
    displayValueExpression: 'label',
    formMetadata: {
      id: 'fieldMetadata',
      fieldMetadata: [{ id: 'id', type: 'string' }],
    },
  };

  const formMetadata = {
    id: 'feilds',
    fieldMetadata: [name, field_metadata],
  };

  return {
    id: 'projections',
    label: 'Projections',
    showToolbar: false,
    showPaginator: false,
    formMetadata,
  };
}
