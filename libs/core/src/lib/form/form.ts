import { Icon } from '../models';
import { Action } from './action';
import { DataTableConfiguration } from './data-table-configuration';
import { FieldMetadata } from './field';
import { LayoutAlign } from './layout-align';
import { Mutation } from './mutation';

export interface FormMetadata {
  /*** id for the entity meta */
  id: string;

  idField?: string;

  label?: string;

  /*** Show pagination controls in table view */
  showPagination?: boolean;

  /*** Core fields */
  fieldMetadata: FieldMetadata[];

  /*** Layout align for entity view */
  layoutAlign?: LayoutAlign;

  dataTableConfiguration?: DataTableConfiguration;

  projections?: Projection[];

  /*** Internal and custom user actions */
  actions?: Action[];

  /*** Internal form change based on value changes  */
  mutations?: Mutation[];

  /*** Url for the data source */
  url?: string;

  backgroundColor?: string;

  /*** Icon color */
  color?: string;

  icon?: Icon;

  /*** Add feilds if they are presented in the record.
   *  Not geenerating a field to edit
   * */
  readOnlyFields?: string[];
}

export class FormMetadataResponse {
  [key: string]: FormMetadata;
}

export interface Projection {
  name: string;
  fieldMetadata: FieldMetadata[];
}

export interface DataTableFormMetadata extends FormMetadata {
  selectable?: boolean;
  editable?: boolean;
}

export interface RootFormMetadata extends FormMetadata {
  projections: Projection[];
}

export interface EntityFormMetadata extends FormMetadata {
  editable?: boolean;
}
