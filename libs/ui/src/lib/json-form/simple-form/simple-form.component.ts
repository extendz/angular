import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
} from '@angular/forms';
import {
  createFormControl,
  ExtFormControl,
  FieldMetadata,
  FormMetadata,
  NestedFormGroupFieldMetadata,
} from '@extendz/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ext-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent
  implements AfterViewInit, ControlValueAccessor, OnDestroy
{
  formGroup: FormGroup;
  fieldMetadata!: FieldMetadata[];

  metadata!: FormMetadata;
  private onChange!: (record: string) => string;
  data?: Record<string, unknown>;

  private sub?: Subscription;

  constructor(private formBuilder: FormBuilder, public ngControl: NgControl) {
    ngControl.valueAccessor = this;
    this.formGroup = this.formBuilder.group({});
  }

  ngOnDestroy(): void {
    if (this.sub != undefined) this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.sub = this.formGroup.valueChanges.subscribe((v) => {
      this.onChange(v);
    });
  }

  writeValue(data: Record<string, string>): void {
    if (data != undefined) {
      this.createForm();
      this.data = data;
      this.formGroup.patchValue(data);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  createForm() {
    const temp = (this.ngControl.control as ExtFormControl).metadata;
    this.metadata = (temp as NestedFormGroupFieldMetadata).formMetadata;
    this.fieldMetadata = this.metadata.fieldMetadata;
    this.metadata.fieldMetadata?.forEach((fm) => {
      this.formGroup.addControl(fm.id, createFormControl(fm));
    });
  }

  // ngOnInit(): void {
  //   this.fields = [...this.formMetadata.fieldMetadata];

  //   this.fields?.forEach((fm) => {
  //     this.formGroup.addControl(fm.id, createFormControl(fm));
  //   });

  //   const mutations = this.formMetadata.mutations;
  //   if (mutations != undefined) {
  //     this.formGroup.valueChanges.subscribe((d) => {
  //       mutations.forEach((mutation) => {
  //         const fieldName = mutation.on.id;
  //         const value = d[fieldName];

  //         switch (mutation.assert) {
  //           case Assert.EQUAL:
  //             if (value == mutation.value)
  //               mutation.actions?.forEach((a) =>
  //                 this.executeAction(a, this.formGroup)
  //               );
  //             break;
  //         }
  //       });
  //     });
  //   }
  // }
  // executeAction(action: Action, row: FormGroup) {
  //   if (action.type == 'internal') {
  //     const internalAction = action as InternalAction;
  //     switch (action.id) {
  //       case '__clear__':
  //         {
  //           const fieldId = internalAction.on?.id as string;
  //           row.controls[fieldId].reset(undefined, { emitEvent: false });
  //         }
  //         break;
  //       case '__hide__':
  //         {
  //           const fieldId = internalAction.on?.id as string;
  //           const index = this.fields.findIndex((f) => f.id == fieldId);
  //           if (index > -1) this.fields.splice(index, 1);
  //         }
  //         break;
  //       case '__show__':
  //         {
  //           const fieldId = internalAction.on?.id as string;
  //           let index = this.fields.findIndex((f) => f.id == fieldId);
  //           if (index == -1) {
  //             index = this.formMetadata.fieldMetadata.findIndex(
  //               (f) => f.id == fieldId
  //             );
  //             this.fields.splice(
  //               index,
  //               0,
  //               this.formMetadata.fieldMetadata[index]
  //             );
  //           }
  //         }
  //         break;
  //       case '__disable__':
  //         {
  //           const fieldId = internalAction.on?.id as string;
  //           row.controls[fieldId].disable({ emitEvent: false });
  //         }
  //         break;
  //       case '__enable__':
  //         {
  //           const fieldId = internalAction.on?.id as string;
  //           row.controls[fieldId].enable({ emitEvent: false });
  //         }
  //         break;
  //     }
  //   } else {
  //     console.log();
  //   }
  // }
}
