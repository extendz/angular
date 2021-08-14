import { ObjectWithLinks } from './object-with-links';

export interface Embedded {
  [key: string]: ObjectWithLinks[];
}
