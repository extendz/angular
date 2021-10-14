import { FieldMetadata } from '.';

export interface Action {
  id:
    | '__add__'
    | '__clear__'
    | '__delete__'
    | '__remove__'
    | '__delete__'
    | '__hide__'
    | '__show__'
    | '__save__'
    | '__disable__'
    | '__enable__'
    | string; // custom action
  type: 'internal' | 'custom';
  icon?: string;
  label?: string;
}

export interface InternalAction extends Action {
  type: 'internal';
  on?: FieldMetadata;
}
