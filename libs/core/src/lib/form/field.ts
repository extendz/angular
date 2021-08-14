import { ValidatorFn } from '@angular/forms';
import { Enum } from './enum';
import { Width } from './layout-align';

export interface FieldMetadata {
  default?: string;
  floatLabel?: 'never';
  hint?: string;
  id: string;
  label: string;
  placeholder?: string;
  autocomplete?: 'off';
  readonly?: boolean;
  type:
    | 'string'
    | 'number'
    | 'color'
    | 'icon'
    | 'enum'
    | 'boolean'
    | 'checkbox'
    | 'expandable'
    | 'embedded-object';
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

export interface EnumFieldMetadata extends FieldMetadata {
  enums?: Enum[];
}

export interface SvgIconFieldMetadata extends FieldMetadata {
  searchDebunce?: number;
}
