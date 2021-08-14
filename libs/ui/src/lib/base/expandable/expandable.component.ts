import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  createFormControl,
  ExpandableFieldMetadata,
  FieldMetadata,
} from '@extendz/core';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.css'],
})
export class ExpandableComponent extends BaseInputComponent implements OnInit {
  formGroup: FormGroup;
  fields?: FieldMetadata[];

  constructor(private formBuilder: FormBuilder) {
    super();
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    const e: ExpandableFieldMetadata = this.control
      .metadata as ExpandableFieldMetadata;
    this.fields = e.fields;
    e.fields.forEach((fm) => {
      this.formGroup.addControl(fm.id, createFormControl(fm));
    });
  }
}
