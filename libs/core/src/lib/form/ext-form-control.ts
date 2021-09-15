import { FormControl, FormGroup } from '@angular/forms';
import { FieldMetadata } from './field';
import { FormMetadata } from './form';

export class ExtFormControl extends FormControl {
  metadata?: FieldMetadata;
  constructor(args: unknown) {
    super(args);
  }
}

export class ExtFormGroup extends FormGroup {
  formMetadata?: FormMetadata;
}
