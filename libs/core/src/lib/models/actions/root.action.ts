export interface RootAction {
  type: 'select';
  payload?: unknown;
}

export interface FieldAction {
  /*** Action genrated compoenent id */
  id?: string;
  type: 'link' | 'edit' | 'save' | 'requestMetadata' | 'requestData';
  payload?: unknown | unknown[];
  /***
   * Reference form name
   */
  reference?: string;
}
