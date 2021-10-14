import { FormControl, FormGroup } from '@angular/forms';
import { FieldMetadata } from './field';
import { FormMetadata } from './form';

export class ExtFormControl extends FormControl {
  /*** Metadata */
  metadata?: FieldMetadata;

  /*** Aditinal data not binding to the form data */
  extra?: Record<string, unknown>;

  /*** */
  id: string = uuidv4();

  constructor(formState: any, validators: any) {
    super(formState, validators);
  }
}

export class ExtFormGroup extends FormGroup {
  formMetadata?: FormMetadata;
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
