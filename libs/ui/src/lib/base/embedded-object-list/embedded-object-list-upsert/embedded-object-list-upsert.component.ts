import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {
  createFormControl,
  createFormGroup,
  ExtFormControl,
  ExtFormGroup,
  FieldMetadata,
  FormMetadata,
} from '@extendz/core';
import { delay, first, of } from 'rxjs';
import { FieldsModel } from '../../../root/fields/fields.model';

@Component({
  selector: 'ext-embedded-object-list-upsert',
  templateUrl: './embedded-object-list-upsert.component.html',
  styleUrls: ['./embedded-object-list-upsert.component.css'],
})
export class EmbeddedObjectListUpsertComponent implements OnInit {
  formControl!: ExtFormControl;
  metadata!: FormMetadata;
  dataSource: unknown[] = [];
  fieldMetadata: FieldMetadata[] = [];
  displayedColumns: (string | undefined)[] = [];
  formGroup!: ExtFormGroup;
  rows = new FormArray([]);

  @ViewChild('table', { static: true }) table!: MatTable<unknown>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public fieldsModel: FieldsModel,
    public dialogRef: MatDialogRef<EmbeddedObjectListUpsertComponent>
  ) {
    const nestedMetadata = fieldsModel.nestedFormGroupFieldMetadata;
    this.metadata = nestedMetadata.formMetadata;
    this.fieldMetadata = nestedMetadata.formMetadata.fieldMetadata;
    this.displayedColumns = this.metadata.fieldMetadata.map((f) => f.id);
    this.formControl = createFormControl(this.metadata);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({ data: this.rows });

    of(this.fieldsModel.data)
      .pipe(delay(100), first())
      .subscribe((data) => {
        this.formControl.setValue(data, { emitEvent: false });
        const list = data as Record<string, unknown>[];
        list.forEach((d) => this.addRow(d));
      });
  }

  onSave() {
    this.dialogRef.close(this.formGroup.value.data);
  }

  addRow(record?: Record<string, unknown>) {
    const row = createFormGroup(this.metadata);

    this.fieldMetadata.forEach((fieldMetada) => {
      fieldMetada.floatLabel = 'never';
      const ctrl = createFormControl(fieldMetada, record);
      row.addControl(fieldMetada.id, ctrl);
    });

    this.rows.push(row);
    this.dataSource.push(record);
    this.table.renderRows();
  }
}
