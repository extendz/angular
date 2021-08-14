import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityMetadata, FieldMetadata, FormMetadata } from '@extendz/core';

@Component({
  selector: 'extendz-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  private entityMetadata!: EntityMetadata;

  formMetadata!: FormMetadata;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((d) => {
      this.entityMetadata = d.resolved.entityMetadata;
      const fields = this.entityMetadata.fields as FieldMetadata[];
      this.formMetadata = { fields };
    });
  }

  ngOnInit(): void {
    console.log();
  }
}
