import {
  AfterContentInit,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { ExtFormControl, FieldAction, LinkFieldMetadata } from '@extendz/core';

@Component({
  selector: 'ext-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements AfterContentInit, ControlValueAccessor {
  @Output() action = new EventEmitter<FieldAction>();

  control: FormControl = new FormControl();
  fieldMetadata?: LinkFieldMetadata;

  private data?: Record<string, string>;

  private onChange!: (record: string) => string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngAfterContentInit(): void {
    this.fieldMetadata = (this.ngControl.control as ExtFormControl)
      .metadata as LinkFieldMetadata;
    const displayField = this.fieldMetadata.displayField;
    if (displayField != undefined && this.data != undefined) {
      this.control.setValue(this.data[displayField]);
    }

    this.control.valueChanges.subscribe((v) => {
      this.onChange(v);
    });
  }

  writeValue(data: Record<string, string>): void {
    this.data = data;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onLink(event: MouseEvent) {
    event.stopPropagation();
    this.action.emit({
      type: 'link',
      payload: this.data,
      reference: this.fieldMetadata?.reference,
    });
  }
}
