import { ExtFormControl } from './ext-form-control';
import { FieldMetadata } from './field';

export function createFormControl(f: FieldMetadata): ExtFormControl {
  const ctrl = new ExtFormControl(f.default != undefined ? f.default : null);
  ctrl.metadata = f;
  if (f.validators != undefined) ctrl.setValidators(f.validators);
  return ctrl;
}
