import { Component, OnInit } from '@angular/core';
import { FieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-embedded-object',
  templateUrl: './embedded-object.component.html',
  styleUrls: ['./embedded-object.component.scss'],
})
export class EmbeddedObjectComponent
  extends BaseInputComponent
  implements OnInit
{
  fieldMetaData?: FieldMetadata;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fieldMetaData = this.control.metadata;
  }
}
