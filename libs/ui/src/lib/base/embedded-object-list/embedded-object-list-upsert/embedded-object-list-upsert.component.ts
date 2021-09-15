import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormMetadata } from '@extendz/core';

@Component({
  selector: 'ext-embedded-object-list-upsert',
  templateUrl: './embedded-object-list-upsert.component.html',
  styleUrls: ['./embedded-object-list-upsert.component.css'],
})
export class EmbeddedObjectListUpsertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public formMetadata: FormMetadata) {}

  ngOnInit(): void {}
}
