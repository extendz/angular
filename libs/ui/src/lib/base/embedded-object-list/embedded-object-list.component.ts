import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmbeddedObjectListFieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';
import { EmbeddedObjectListUpsertComponent } from './embedded-object-list-upsert/embedded-object-list-upsert.component';

@Component({
  selector: 'ext-embedded-object-list',
  templateUrl: './embedded-object-list.component.html',
  styleUrls: ['./embedded-object-list.component.css'],
})
export class EmbeddedObjectListComponent
  extends BaseInputComponent
  implements OnInit
{
  fieldMetaData?: EmbeddedObjectListFieldMetadata;
  constructor(private matDialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.fieldMetaData = this.control
      .metadata as EmbeddedObjectListFieldMetadata;
    this.onJson();
  }
  onJson(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.matDialog.open(EmbeddedObjectListUpsertComponent, {
      data: this.fieldMetaData?.formMetadata,
      width: '60%',
      height: 'auto',
    });
  }
}
