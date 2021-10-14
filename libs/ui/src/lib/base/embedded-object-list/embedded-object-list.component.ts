import { AfterContentInit, Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  DataTableFieldMetadata,
  EmbeddedObjectListFieldMetadata,
  ExtFormControl,
} from '@extendz/core';
import { first, map } from 'rxjs';
import { FieldsModel } from '../../root/fields/fields.model';
import { EmbeddedObjectListUpsertComponent } from './embedded-object-list-upsert/embedded-object-list-upsert.component';

@Component({
  selector: 'ext-embedded-object-list',
  templateUrl: './embedded-object-list.component.html',
  styleUrls: ['./embedded-object-list.component.css'],
})
export class EmbeddedObjectListComponent
  implements AfterContentInit, ControlValueAccessor
{
  metadata!: EmbeddedObjectListFieldMetadata;
  data?: unknown[];

  control: FormControl = new FormControl();

  private onChange!: (data: any) => any[];

  constructor(public ngControl: NgControl, private matDialog: MatDialog) {
    ngControl.valueAccessor = this;
  }

  writeValue(data: unknown[]): void {
    this.data = data;
  }

  registerOnChange(data: any): void {
    this.onChange = data;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    const temp = (this.ngControl.control as ExtFormControl).metadata;
    this.metadata = temp as EmbeddedObjectListFieldMetadata;
    this.updateDisplayValue(this.data);
  }

  supplant(o: Record<string, unknown>, text: string) {
    return text.replace(/\{{([^${}]*)}}/g, (a: any, b: string) => {
      const r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
  }

  updateDisplayValue(data: any) {
    const maper = this.metadata.displayValueExpression;
    if (data && data.length > 0 && maper) {
      const first = data[0];
      const out = this.supplant(first, maper);
      setTimeout(() => this.control.setValue(out), 100);
    }
  }

  onJson(event?: MouseEvent) {
    if (event) event.stopPropagation();

    const nestedFormGroupFieldMetadata: DataTableFieldMetadata = {
      id: 'table',
      formMetadata: this.metadata.formMetadata,
    };

    const data: FieldsModel = {
      data: this.data as unknown[],
      nestedFormGroupFieldMetadata,
    };

    const ref = this.matDialog.open(EmbeddedObjectListUpsertComponent, {
      data,
      width: '60%',
      height: 'auto',
    });
    ref
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data != '') {
          this.onChange(data);
          this.updateDisplayValue(data);
        }
      });
  }
}
