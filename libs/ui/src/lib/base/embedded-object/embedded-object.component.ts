import { AfterContentInit, Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  EmbeddedObjectFieldMetadata,
  ExtFormControl,
  FormMetadata,
  NestedFormGroupFieldMetadata,
} from '@extendz/core';
import { filter, first, tap } from 'rxjs';
import { FieldsModel } from '../../root/fields/fields.model';
import { EmbeddedObjectUpsertComponent } from './embedded-object-upsert/embedded-object-upsert.component';

@Component({
  selector: 'ext-embedded-object',
  templateUrl: './embedded-object.component.html',
  styleUrls: ['./embedded-object.component.scss'],
})
export class EmbeddedObjectComponent
  implements AfterContentInit, ControlValueAccessor
{
  fieldMetaData?: EmbeddedObjectFieldMetadata;

  control: FormControl = new FormControl();
  display?: string;
  private data?: Record<string, unknown>;

  private onChange!: (record: string) => string;

  constructor(public ngControl: NgControl, private matDialog: MatDialog) {
    ngControl.valueAccessor = this;
  }

  writeValue(data: Record<string, unknown>): void {
    this.data = data;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  private changeDisplayValue() {
    const displayField = this.fieldMetaData?.displayField;
    if (displayField != undefined) {
      const value = this.data?.[displayField];
      if (value != undefined) this.display = value as string;
      else this.display = '';
    }
    this.control.patchValue(this.data);
  }

  ngAfterContentInit(): void {
    this.fieldMetaData = (this.ngControl.control as ExtFormControl)
      .metadata as EmbeddedObjectFieldMetadata;
    this.changeDisplayValue();
    this.control.valueChanges.subscribe((v) => {
      this.onChange(v);
    });
  }

  onJson(event?: MouseEvent) {
    if (event) event.stopPropagation();

    if (this.fieldMetaData != undefined) {
      const nestedFormGroupFieldMetadata: NestedFormGroupFieldMetadata = {
        id: 'embedded-object',
        label: this.fieldMetaData.label,
        formMetadata: this.fieldMetaData.formMetadata as FormMetadata,
      };
      const data: FieldsModel = {
        data: this.data as Record<string, unknown>,
        nestedFormGroupFieldMetadata,
      };
      const ref = this.matDialog.open(EmbeddedObjectUpsertComponent, {
        data,
        width: '60%',
        height: 'auto',
      });
      ref
        .afterClosed()
        .pipe(
          first(),
          filter((data) => data != undefined),
          tap((data) => {
            this.data = data;
            this.changeDisplayValue();
          })
        )
        .subscribe();
    }
  }
}
