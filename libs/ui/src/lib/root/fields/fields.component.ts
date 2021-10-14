import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  createFormControl,
  DataTableFieldMetadata,
  ExtFormControl,
} from '@extendz/core';
import { delay, first, of } from 'rxjs';
import { FieldsModel } from './fields.model';

@Component({
  selector: 'ext-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent implements OnInit {
  formControl!: ExtFormControl;
  metadata!: DataTableFieldMetadata;

  // @ViewChild('table', { static: true }) table!: ExtDataTableComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public fieldsModel: FieldsModel) {
    this.metadata = fieldsModel.nestedFormGroupFieldMetadata;
    this.formControl = createFormControl(this.metadata);
  }

  ngOnInit(): void {
    of(this.fieldsModel.data)
      .pipe(delay(100), first())
      .subscribe((data) => {
        this.formControl.setValue(data, { emitEvent: false });
      });
  }
}
