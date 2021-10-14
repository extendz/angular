import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import {
  createFormControl,
  ExtFormControl,
  FieldMetadata,
} from '@extendz/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ext-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent
  implements AfterContentInit, OnDestroy, ControlValueAccessor
{
  data!: number;
  fieldMetadata?: FieldMetadata;
  control!: FormControl;
  subscription!: Subscription;

  private onTouched!: (touch: boolean) => boolean;
  private onChange!: (data: number) => string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngAfterContentInit(): void {
    this.fieldMetadata = (this.ngControl.control as ExtFormControl)
      .metadata as FieldMetadata;
    this.control = createFormControl(this.fieldMetadata);
    this.control.setValue(this.data);
    this.subscription = this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription != null) this.subscription.unsubscribe();
  }

  writeValue(data: number): void {
    this.data = data;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
