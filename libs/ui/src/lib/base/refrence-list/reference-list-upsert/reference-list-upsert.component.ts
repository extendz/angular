import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {
  FieldMetadata,
  FormMetadata,
  ReferenceListActionModel,
} from '@extendz/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ext-reference-list-upsert',
  templateUrl: './reference-list-upsert.component.html',
  styleUrls: ['./reference-list-upsert.component.css'],
})
export class ReferenceListUpsertComponent implements OnInit {
  dataSource: unknown[] = [];
  fieldMetadata: FieldMetadata[] = [];
  displayedColumns: string[] = [];
  page$: Subject<PageEvent> = new Subject();
  metadata!: FormMetadata;
  showSearch = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public action: ReferenceListActionModel
  ) {}

  ngOnInit(): void {
    if (this.action.formMetadata != undefined)
      this.metadata = this.action.formMetadata;
    this.fieldMetadata = this.metadata.fieldMetadata;

    // if datatableconfigaraions aret here
    const projection = this.action.projection;
    if (projection != undefined && this.metadata.projections) {
      const proj = this.metadata.projections.find((p) => p.name == projection);
      if (proj != undefined) this.fieldMetadata = proj.fieldMetadata;
    }

    this.displayedColumns = this.fieldMetadata.map((f) => f.id as string);
    if (this.action.pagedData != undefined)
      this.dataSource = this.action.pagedData.data;
  }

  onPage(event: PageEvent) {
    this.page$.next(event);
  }
}
