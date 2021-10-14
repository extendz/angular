import { AfterContentInit, Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NgControl,
} from '@angular/forms';
import { ExtFormControl, MapFieldMetadata } from '@extendz/core';

@Component({
  selector: 'ext-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterContentInit, ControlValueAccessor {
  fieldMetaData?: MapFieldMetadata;

  formGroup!: FormGroup;
  displayedColumns: string[] = ['key', 'value'];
  rows = new FormArray([]);

  private onTouched!: (touch: boolean) => boolean;
  private onChange!: (record: Record<string, string>) => string;

  private data?: Record<string, string>;
  dataSource: Record<string, string>[] = [];

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  writeValue(data: Record<string, string>): void {
    this.data = data;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    this.fieldMetaData = (this.ngControl.control as ExtFormControl)
      .metadata as MapFieldMetadata;
    this.formGroup = new FormGroup({ data: this.rows });

    // this.displayedColumns = this.fieldMetaData.keys;
    this.fieldMetaData.keys.forEach((k) => {
      const value = this.data?.[k] as string;
      this.dataSource.push({ key: k, value });
      const group = new FormGroup({});
      group.addControl('key', new FormControl(k));
      group.addControl('value', new FormControl(value));
      this.rows.push(group);
    });
    if (this.data) this.formGroup.patchValue(this.data);

    this.formGroup.controls['data'].valueChanges.subscribe((v: []) => {
      const data: Record<string, string> = {};
      v.forEach((i: Record<string, string>) => {
        data[i.key] = i.value;
      });
      this.onChange(data);
    });
  }
}
