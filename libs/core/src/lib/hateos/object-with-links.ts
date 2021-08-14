import { Links } from './links';

export interface ObjectWithLinks {
  _links?: Links;
  [key: string]: any;
}
