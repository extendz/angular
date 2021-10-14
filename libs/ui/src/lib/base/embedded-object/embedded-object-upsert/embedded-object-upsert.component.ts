import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  createFormControl,
  ExtFormControl,
  NestedFormGroupFieldMetadata,
} from '@extendz/core';
import { delay, first, of } from 'rxjs';
import { SimpleFormComponent } from '../../../json-form/simple-form/simple-form.component';
import { FieldsModel } from '../../../root/fields/fields.model';
import { EmbeddedObjectListUpsertComponent } from '../../embedded-object-list/embedded-object-list-upsert/embedded-object-list-upsert.component';

@Component({
  selector: 'ext-embedded-object-upsert',
  templateUrl: './embedded-object-upsert.component.html',
  styleUrls: ['./embedded-object-upsert.component.css'],
})
export class EmbeddedObjectUpsertComponent implements OnInit {
  formControl!: ExtFormControl;
  metadata!: NestedFormGroupFieldMetadata;

  @ViewChild('form', { static: true }) simpleForm!: SimpleFormComponent;

  constructor(
    @Inject(MAT_DIALOG_DATA) public fieldsModel: FieldsModel,
    public dialogRef: MatDialogRef<EmbeddedObjectListUpsertComponent>
  ) {
    this.metadata = fieldsModel.nestedFormGroupFieldMetadata;
    this.formControl = createFormControl(this.metadata);
  }

  ngOnInit(): void {
    of(this.fieldsModel.data)
      .pipe(delay(0), first())
      .subscribe((data) => {
        if (data == null) this.simpleForm.createForm();
        else this.formControl.patchValue(data, { emitEvent: false });
      });
  }

  onSave() {
    this.dialogRef.close(this.formControl.value);
  }
}
