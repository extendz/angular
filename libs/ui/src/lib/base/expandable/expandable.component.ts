import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  createFormControl,
  DataTableFieldMetadata,
  ExpandableFieldMetadata,
  ExtFormGroup,
  FieldMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExpandableComponent),
      multi: true,
    },
  ],
})
export class ExpandableComponent implements OnInit, ControlValueAccessor {
  @Input() metadata!: FieldMetadata;
  formGroup: FormGroup;
  fields?: FieldMetadata[];
  enabled = false;

  private onTouched!: () => void;
  private onChange!: (
    record: Record<string, unknown>
  ) => Record<string, unknown>;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    const e: ExpandableFieldMetadata = this.metadata as ExpandableFieldMetadata;
    this.fields = e.fields;
    this.fields.forEach((fm) => {
      if (fm.type == 'checkbox')
        this.formGroup.addControl(fm.id, createFormControl(fm));
      else {
        const nested = fm as DataTableFieldMetadata;
        this.formGroup.addControl(fm.id, createFormControl(nested));
      }
    });

    this.formGroup.valueChanges.subscribe((d) => {
      // console.log(d);
      this.onChange(d);
    });
  }

  onFormGroupChange(formGroup: ExtFormGroup, fieldMetadata: FieldMetadata) {
    // console.log(this.formGroup);
    // this.formGroup.setControl('toolbar', formGroup);
  }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
