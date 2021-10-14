import { FormMetadata } from '@extendz/core';

export interface DataTableResolverModel {
  formMetadata: FormMetadata;
}

export interface FormResolverModel extends DataTableResolverModel {
  record: unknown;
}
