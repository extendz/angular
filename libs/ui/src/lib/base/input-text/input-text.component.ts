import { AfterContentInit, Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import {
  createFormControl,
  ExtFormControl,
  FieldMetadata,
} from '@extendz/core';

@Component({
  selector: 'ext-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent
  implements AfterContentInit, ControlValueAccessor
{
  control!: FormControl;
  fieldMetadata?: FieldMetadata;
  data?: string;

  private onTouched!: (touch: boolean) => boolean;
  private onChange!: (record: string) => string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngAfterContentInit(): void {
    this.fieldMetadata = (this.ngControl.control as ExtFormControl)
      .metadata as FieldMetadata;
    this.control = createFormControl(this.fieldMetadata);
    this.control.setValue(this.data);
    this.control.valueChanges.subscribe((v) => {
      if (this.data == v) this.onTouched(false);
      // else this.onTouched(true);
      this.onChange(v);
    });
  }

  writeValue(data: string): void {
    this.data = data;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
