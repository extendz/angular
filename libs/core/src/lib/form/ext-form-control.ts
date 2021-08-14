import { FormControl } from '@angular/forms';
import { FieldMetadata } from './field';

export class ExtFormControl extends FormControl {
  metadata?: FieldMetadata;
  constructor(...args: unknown[]) {
    super(args);
  }
}
