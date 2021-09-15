import { Action } from './action';
import { FieldMetadata } from './field';
import { LayoutAlign } from './layout-align';
import { Mutation } from './mutation';

export interface FormMetadata {
  /*** When binding to a table the name of the property */
  arrayName?: string;

  label?: string;

  /*** Show pagination controls in table view */
  showPagination?: boolean;

  /*** Core fields */
  fieldMetadata: FieldMetadata[];

  /*** Layout align for entity view */
  layoutAlign?: LayoutAlign;

  /*** Internal and custom user actions */
  actions?: Action[];

  /*** Internal form change based on value changes  */
  mutations?: Mutation[];
}
