import { ValidatorFn } from '@angular/forms';
import { Icon } from '../models';
import { InternalAction } from './action';
import { Enum } from './enum';
import { FormMetadata } from './form';
import { Width } from './layout-align';
import { Mutation } from './mutation';

export interface FieldMetadata {
  action?: InternalAction;
  autocomplete?: 'off';
  default?: unknown;
  floatLabel?: 'never';
  hint?: string;
  id: string;
  icon?: Icon;
  label?: string;
  mutation?: Mutation;
  placeholder?: string;
  readonly?: boolean;
  type?:
    | 'action'
    | 'boolean'
    | 'checkbox'
    | 'color'
    | 'embedded-object'
    | 'embedded-object-list'
    | 'enum'
    | 'expandable'
    | 'icon'
    | 'number'
    | 'string';
  validators?: ValidatorFn[];
  width?: Width;
}

export interface ExpandableFieldMetadata extends FieldMetadata {
  type: 'expandable';
  fields: FieldMetadata[];
}

export interface CheckboxFieldMetadata extends FieldMetadata {
  type: 'checkbox';
}

export interface ColorPickerFieldMetadata extends FieldMetadata {
  type: 'color';
}

export interface NestedFormGroupFieldMetadata extends FieldMetadata {
  formMetadata: FormMetadata;
}

export interface DataTableFieldMetadata extends NestedFormGroupFieldMetadata {
  url?: string;
  showToolbar?: boolean;
  showPaginator?: boolean;
}

// TODO better name?
export interface FormMetadataFieldMetadata
  extends NestedFormGroupFieldMetadata {
  dummy?: number;
}

export interface EmbeddedObjectListFieldMetadata
  extends FormMetadataFieldMetadata {
  type: 'embedded-object-list';
}

export interface EmbeddedObjectFieldMetadata extends FormMetadataFieldMetadata {
  type: 'embedded-object';
}

export interface ActionFieldMetadata extends FieldMetadata {
  type: 'action';
}

export interface EnumFieldMetadata extends FieldMetadata {
  enums?: Enum[];
}

export interface SvgIconFieldMetadata extends FieldMetadata {
  searchDebunce?: number;
}
