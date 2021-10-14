import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
} from '@angular/forms';
import {
  Action,
  createFormControl,
  ExtFormControl,
  FormMetadata,
  NestedFormGroupFieldMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class ExtBasicFormComponent
  implements AfterViewInit, ControlValueAccessor
{
  @Output() form = new EventEmitter<FormGroup>();

  formGroup: FormGroup;
  metadata!: FormMetadata;
  showToolbar = true;
  actions?: Action[];

  private onTouched!: () => void;
  private onChange!: (record: any) => any;

  constructor(private formBuilder: FormBuilder, public ngControl: NgControl) {
    ngControl.valueAccessor = this;
    this.formGroup = this.formBuilder.group({});
  }

  onAction(action: Action, index?: number) {
    this.onChange(['add']);
  }

  writeValue(data: any): void {
    if (data) {
      this.createForm();
      this.formGroup.patchValue(data);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.form.emit(this.formGroup), 100);
  }

  private createForm() {
    const temp = (this.ngControl.control as ExtFormControl).metadata;
    this.metadata = (temp as NestedFormGroupFieldMetadata).formMetadata;
    this.metadata.fieldMetadata?.forEach((fm) => {
      this.formGroup.addControl(fm.id, createFormControl(fm));
    });
  }
}
