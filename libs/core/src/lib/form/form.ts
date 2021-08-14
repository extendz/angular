import { FieldMetadata } from './field';
import { LayoutAlign } from './layout-align';

export interface FormMetadata {
  // When binding to a table the name of the property
  arrayName?: string;
  fields: FieldMetadata[];
  layoutAlign?: LayoutAlign;
}
