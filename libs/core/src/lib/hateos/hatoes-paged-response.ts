import { HateosResponse } from './hatoes-response';
import { Page } from './page';

export interface HateosPagedResponse extends HateosResponse {
  page?: Page;
}
