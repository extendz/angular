import { Component, Input, OnInit } from '@angular/core';
import { CheckboxFieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent extends BaseInputComponent implements OnInit {
  @Input() fieldMetaData?: CheckboxFieldMetadata;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
