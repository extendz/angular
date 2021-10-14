import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AbstractEntityMetadataService,
  EXT_ENTITY_METADATA_SERVICE,
  FormMetadata,
  Projection,
  RootAction,
  RootFormMetadata,
} from '@extendz/core';
import { filter, mergeMap, Observable, take, tap } from 'rxjs';
import { ConfigDataTableComponent } from './config-data-table/config-data-table.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldsModel } from './fields/fields.model';
import {
  getFieldsFormMetadata,
  getProjectionFormMetadata,
} from './fields/fields.utils';
import { UpsertComponent } from './upsert/upsert.component';

@Component({
  selector: 'ext-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  @Output() action = new EventEmitter<RootAction>();

  models$: Observable<Record<string, FormMetadata>>;

  constructor(
    @Inject(EXT_ENTITY_METADATA_SERVICE)
    private entityMetadataService: AbstractEntityMetadataService,
    private matDialog: MatDialog
  ) {
    this.models$ = this.entityMetadataService.getAll().pipe(
      take(1),
      tap((d) => {
        // this.onField(d['category']);
        // this.onDataTableConfig();
        // const pr = d['category'].projections;
        // this.onProjections();
      })
    );
  }

  onField(entityMetadata: FormMetadata) {
    this.entityMetadataService
      .getFields(entityMetadata)
      .pipe(
        mergeMap((records) => {
          const nestedFormGroupFieldMetadata = getFieldsFormMetadata();
          const data: FieldsModel = {
            data: records,
            nestedFormGroupFieldMetadata,
          };
          const ref = this.matDialog.open(FieldsComponent, {
            // minWidth: '90%',
            // minHeight: '60%',
            data,
          });
          return ref.afterClosed();
        }),
        take(1),
        filter((d) => d !== undefined)
      )
      .subscribe();
  }

  onProjections(records: Projection[]) {
    const nestedFormGroupFieldMetadata = getProjectionFormMetadata();
    const data: FieldsModel = {
      data: records,
      nestedFormGroupFieldMetadata,
    };
    this.matDialog.open(FieldsComponent, { data });
  }

  onEdit(event: MouseEvent) {
    event.preventDefault();
  }

  onDataTableConfig() {
    const ref = this.matDialog.open(ConfigDataTableComponent, {
      width: '99%',
      height: 'auto',
    });
  }

  onAdd() {
    this.matDialog.open(UpsertComponent, {
      // minWidth: '99vw',
      // minHeight: '99vh',
    });
  }

  onSelect(entityMetadata: FormMetadata) {
    this.action.emit({ type: 'select', payload: entityMetadata });
  }
}
