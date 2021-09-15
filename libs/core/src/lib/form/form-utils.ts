import { ExtFormControl, ExtFormGroup } from './ext-form-control';
import { FieldMetadata } from './field';
import { FormMetadata } from './form';

export function createFormControl(
  fieldMetadata: FieldMetadata,
  record?: Record<string, unknown>
): ExtFormControl {
  let value = undefined;
  if (record != undefined) value = record?.[fieldMetadata.id];
  else if (fieldMetadata.default != undefined) value = fieldMetadata.default;

  const validators = fieldMetadata.validators;

  const ctrl = new ExtFormControl(value);
  ctrl.metadata = fieldMetadata;
  // if (validators != undefined) ctrl.setValidators(validators);

  return ctrl;
}

export function createFormGroup(formMetadata: FormMetadata) {
  const formGroup = new ExtFormGroup({});
  formGroup.formMetadata = formMetadata;
  return formGroup;
}
