import { NestedFormGroupFieldMetadata } from '@extendz/core';

export interface FieldsModel {
  data: unknown[] | Record<string, unknown[]> | Record<string, unknown>;
  nestedFormGroupFieldMetadata: NestedFormGroupFieldMetadata;
}
