import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityMetadata } from '../entity-meta/entity-metadata';
import { EntityMetadataResponse } from '../entity-meta/entity-metadata-response';
import { FieldMetadata } from '../form/field';

export const EXT_ENTITY_METADATA_SERVICE = new InjectionToken(
  'EXT_ENTITY_METADATA_SERVICE'
);

export interface AbstractEntityMetadataService {
  getAll(): Observable<EntityMetadataResponse>;
  getOne(id: string): Observable<EntityMetadata>;
  getFields(entityMetadata: EntityMetadata): Observable<FieldMetadata[]>;
  getFieldsById(id: string): Observable<FieldMetadata[]>;
  save(entityMetadata: EntityMetadata): Observable<EntityMetadata>;
}
