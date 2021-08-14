import { Component, Input, OnInit } from '@angular/core';
import { EnumFieldMetadata } from '@extendz/core';
import { BaseInputComponent } from '../base.component';

@Component({
  selector: 'ext-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css'],
})
export class EnumComponent extends BaseInputComponent implements OnInit {
  @Input() fieldMetaData?: EnumFieldMetadata;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
