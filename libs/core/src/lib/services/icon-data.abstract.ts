import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';
import { Icon } from '../models/icon';

export const EXT_ICON_DATA_SERVICE = new InjectionToken(
  'EXT_ICON_DATA_SERVICE'
);

export interface AbstractIconDataService {
  getAll(seachText?: string): Observable<Icon[]>;
  getOne<T>(id: string): Observable<T>;
}
