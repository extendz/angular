import { Links } from './links';
import { Embedded } from './embedded';

export interface HateosResponse {
  _embedded: Embedded;
  _links: Links;
}
