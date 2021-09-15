import { FieldMetadata, InternalAction } from '.';
import { Assert } from './aseert';

export interface Mutation {
  /*** Chage the mutation on. Default is the current one */
  on: FieldMetadata;

  assert: Assert;

  /*** Value to be match with */
  value: string;

  /*** Set of actions to perform */
  actions?: InternalAction[];
}
