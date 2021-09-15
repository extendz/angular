import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-embedded-object-upsert',
  templateUrl: './embedded-object-upsert.component.html',
  styleUrls: ['./embedded-object-upsert.component.css'],
})
export class EmbeddedObjectUpsertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public formMetadata: FormMetadata) {}

  ngOnInit(): void {}
}
