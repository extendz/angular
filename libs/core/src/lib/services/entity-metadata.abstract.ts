import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';
import { FormMetadata, FormMetadataResponse } from '../form';
import { FieldMetadata } from '../form/field';

export const EXT_ENTITY_METADATA_SERVICE = new InjectionToken(
  'EXT_ENTITY_METADATA_SERVICE'
);

export interface AbstractEntityMetadataService {
  getAll(): Observable<FormMetadataResponse>;
  getOne(id: string): Observable<FormMetadata>;
  getFields(entityMetadata: FormMetadata): Observable<FieldMetadata[]>;
  getFieldsById(id: string): Observable<FieldMetadata[]>;
  save(entityMetadata: FormMetadata): Observable<FormMetadata>;
}
