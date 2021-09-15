import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AbstractEntityMetadataService,
  EntityMetadata,
  ExtRootConfig,
  EXT_ENTITY_METADATA_SERVICE,
  EXT_ROOT_CONFIG,
  RootAction,
} from '@extendz/core';
import { filter, mergeMap, Observable, take, tap } from 'rxjs';
import { ConfigDataTableComponent } from './config-data-table/config-data-table.component';
import { FieldsComponent } from './fields/fields.component';
import { UpsertComponent } from './upsert/upsert.component';

@Component({
  selector: 'ext-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  @Output() action = new EventEmitter<RootAction>();

  models$: Observable<Record<string, EntityMetadata>>;

  constructor(
    @Inject(EXT_ROOT_CONFIG) private rootConfig: ExtRootConfig,
    @Inject(EXT_ENTITY_METADATA_SERVICE)
    private entityMetadataService: AbstractEntityMetadataService,
    private matDialog: MatDialog
  ) {
    this.models$ = this.entityMetadataService.getAll().pipe(
      take(1),
      tap((d) => {
        this.onField(d['category']);
        // this.onDataTableConfig();
      })
    );
  }

  onField(entityMetadata: EntityMetadata) {
    this.entityMetadataService
      .getFields(entityMetadata)
      .pipe(
        mergeMap((data) => {
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

  onSelect(entityMetadata: EntityMetadata) {
    this.action.emit({ type: 'select', payload: entityMetadata });
  }
}
