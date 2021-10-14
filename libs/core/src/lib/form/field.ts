import { ValidatorFn } from '@angular/forms';
import { Icon } from '../models';
import { InternalAction } from './action';
import { Enum } from './enum';
import { FormMetadata } from './form';
import { ImageMetadata } from './image-metadata';
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
  readOnly?: boolean;
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
    | 'image'
    | 'image-list'
    | 'link'
    | 'map'
    | 'number'
    | 'reference-list'
    | 'string';
  /*** Should create validator */
  required?: true;
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

export interface ImageFieldMetada extends FieldMetadata {
  type: 'image';
  imageMetadata: ImageMetadata;
  event: Event;
}

export interface LinkFieldMetadata extends FieldMetadata {
  type: 'link';
  reference: string;
  displayField: string;
}

export interface ColorPickerFieldMetadata extends FieldMetadata {
  type: 'color';
}

export interface NestedFormGroupFieldMetadata extends FieldMetadata {
  formMetadata: FormMetadata;
}

export interface DataTableFieldMetadata extends NestedFormGroupFieldMetadata {
  url?: string;
  selectable?: boolean;
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
  /*** Input field display is mapped to this value */
  displayValueExpression?: string;
  type: 'embedded-object-list';
}

export interface EmbeddedObjectFieldMetadata extends FormMetadataFieldMetadata {
  type: 'embedded-object';
  displayField?: string;
}

export interface ReferenceListFieldMetadata extends FormMetadataFieldMetadata {
  type: 'reference-list';

  /*** Referring form/entity */
  reference: string;

  /*** reverse reference field name*/
  mappedBy: string;

  /*** Projection for the table */
  projection: string;

  /*** display field */
  displayField: string;
}

export interface MapFieldMetadata extends FieldMetadata {
  type: 'map';
  keys: string[];
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
