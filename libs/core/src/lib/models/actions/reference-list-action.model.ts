import { ExtFormGroup, FieldMetadata, FormMetadata } from '../../form';
import { PagedData } from '../paged-data';

export interface SearchParam {
  field: string;
  operation: '=';
  value: string;
}

export interface ReferenceListActionModel {
  metadata?: FieldMetadata;
  extFormGroup?: ExtFormGroup;
  formMetadata?: FormMetadata;
  searchParams?: SearchParam[];
  record?: Record<string, unknown>;
  pagedData?: PagedData;
  projection?: string;
}
