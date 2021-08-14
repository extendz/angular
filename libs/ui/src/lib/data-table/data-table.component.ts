import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { FieldMetadata, FormMetadata } from '@extendz/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ext-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() formMetadata!: FormMetadata;
  @Input() data?: Record<string, unknown>[];

  rows: FormArray = this.fb.array([]);
  formGroup!: FormGroup;
  arrayName!: string;

  fieldMetadata: FieldMetadata[] = [];
  displayedColumns: string[] = [];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const group: Record<string, FormArray> = {};
    this.arrayName = (this.formMetadata.arrayName as string) || 'data';
    group[this.arrayName] = this.rows;
    this.formGroup = this.fb.group(group);
    this.fieldMetadata = this.formMetadata.fields;
    this.displayedColumns = this.fieldMetadata.map((f) => f.id);

    this.data?.forEach((d) => this.addRow(d));
    this.updateView();

    // this.formGroup.valueChanges.subscribe((d) => {
    //   const formArray = this.formGroup.get(
    //     this.formMetadata.arrayName as string
    //   ) as FormArray;
    //   formArray.controls.forEach((c) => {
    //     const fg = c as FormGroup;
    //   });
    // });
  }

  onAdd() {
    this.addRow();
    this.updateView();
    console.log(this.formGroup);
    // this.displayedColumns.push('save');
    console.log(this.displayedColumns);
  }

  addRow(record?: Record<string, unknown>, noUpdate?: boolean) {
    const row = this.fb.group({});

    this.formMetadata.fields.forEach((fm) => {
      const value = record?.[fm.id];
      const validators = fm.validators || [];
      const ctrl = new FormControl(
        value != undefined ? value : fm.default,
        validators
      );
      // if (fm.validators != undefined) ctrl.setValidators(fm.validators);
      row.addControl(fm.id, ctrl);
    });
    this.rows.push(row);
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }
}
