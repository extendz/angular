import { AfterContentInit, Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { EnumFieldMetadata, ExtFormControl } from '@extendz/core';

@Component({
  selector: 'ext-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent
  implements AfterContentInit, ControlValueAccessor
{
  control: FormControl = new FormControl();
  fieldMetadata?: EnumFieldMetadata;

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

  // ngOnInit(): void {
  //   this.fieldMetaData = this.control.metadata;
  // }
}
