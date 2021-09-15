import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  createFormControl,
  DataTableFieldMetadata,
  EntityMetadata,
  ExtFormControl,
  FieldMetadata,
} from '@extendz/core';

@Component({
  selector: 'extendz-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  private entityMetadata!: EntityMetadata;

  metadata!: DataTableFieldMetadata;
  formControl!: ExtFormControl;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((d) => {
      this.entityMetadata = d.resolved.entityMetadata;
    });
  }

  ngOnInit(): void {
    const fieldMetadata = this.entityMetadata.fields as FieldMetadata[];
    const formMetadata = { fieldMetadata };
    this.metadata = {
      ...this.entityMetadata,
      ...{ formMetadata },
      showToolbar: true,
    };
    this.formControl = createFormControl(this.metadata);
  }
}
