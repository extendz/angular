import { Action } from './action';

export interface DataTableConfiguration {
  projection: string;
  selectable: boolean;
  editable: boolean;
  actions?: Action[];
}
