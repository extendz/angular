import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmbeddedObjectFieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';
import { EmbeddedObjectUpsertComponent } from './embedded-object-upsert/embedded-object-upsert.component';

@Component({
  selector: 'ext-embedded-object',
  templateUrl: './embedded-object.component.html',
  styleUrls: ['./embedded-object.component.scss'],
})
export class EmbeddedObjectComponent
  extends BaseInputComponent
  implements OnInit
{
  fieldMetaData?: EmbeddedObjectFieldMetadata;

  constructor(private matDialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.fieldMetaData = this.control.metadata as EmbeddedObjectFieldMetadata;
    this.onJson();
  }

  onJson(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.matDialog.open(EmbeddedObjectUpsertComponent, {
      data: this.fieldMetaData?.formMetadata,
      width: '60%',
      height: 'auto',
    });
  }
}
