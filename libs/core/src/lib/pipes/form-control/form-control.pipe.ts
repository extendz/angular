import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ExtFormControl, ExtFormGroup } from '../../form';
import { FieldMetadata } from '../../form/field';

@Pipe({ name: 'formControl' })
export class FormControlPipe implements PipeTransform {
  transform(
    formGroup: FormGroup,
    field: FieldMetadata,
    index?: number,
    arrayName?: string
  ): ExtFormControl {
    if (index != undefined) {
      if (arrayName == undefined) arrayName = 'data';
      const formArray = formGroup.get(arrayName) as FormArray;
      const innerFormGroup = formArray.controls[index] as FormGroup;
      return innerFormGroup.controls[field.id] as ExtFormControl;
    }
    return formGroup.controls[field.id] as ExtFormControl;
  }
}

@Pipe({ name: 'formGroup' })
export class FormGroupPipe implements PipeTransform {
  transform(formGroup: FormGroup, field: FieldMetadata): ExtFormGroup {
    return formGroup.controls[field.id] as ExtFormGroup;
  }
}

@Pipe({ name: 'formArray' })
export class FormArrayPipe implements PipeTransform {
  transform(array: FormArray, index: number): ExtFormGroup {
    return array.controls[index] as ExtFormGroup;
  }
}
