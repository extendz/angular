import { Assert } from './assert';

export interface Validation {
  on?: string;
  value?: string;
  disable?: string[];
  assert?: Assert;
}
