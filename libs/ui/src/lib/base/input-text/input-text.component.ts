import { AfterContentInit, Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { ExtFormControl, FieldMetadata } from '@extendz/core';

@Component({
  selector: 'ext-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent
  implements AfterContentInit, ControlValueAccessor
{
  control: FormControl = new FormControl();
  fieldMetadata?: FieldMetadata;

  private onChange!: (record: string) => string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngAfterContentInit(): void {
    this.fieldMetadata = (this.ngControl.control as ExtFormControl).metadata;
    this.control.valueChanges.subscribe((v) => {
      this.onChange(v);
    });
  }

  writeValue(value: string): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
