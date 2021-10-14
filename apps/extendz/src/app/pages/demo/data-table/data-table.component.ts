import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
  createFormControl,
  DataTableFieldMetadata,
  DataTableFormMetadata,
  ExtFormControl,
  FieldAction,
  getId,
  getIdFrom,
  getValueByField,
  HateosResponse,
  ObjectWithLinks,
  Page,
  ReferenceListActionModel,
  ReferenceListFieldMetadata,
} from '@extendz/core';
import { mergeMap } from 'rxjs';
import { EntityMetadataService } from '../services/entity-metadata/entity-metadata.service';
import { EntityService } from '../services/entity-service/entity.service';
import { getHttpPrams } from '../services/entity-service/entity.utils';

@Component({
  selector: 'extendz-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  private formMetadata!: DataTableFormMetadata;
  event?: FieldAction;

  // metadata!: DataTableFieldMetadata;
  formControl!: ExtFormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private entityService: EntityService,
    private matSnackbar: MatSnackBar,
    private entityMetadata: EntityMetadataService,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe((d) => {
      this.formMetadata = d.resolved.formMetadata;
    });
  }

  ngOnInit(): void {
    const projectionName = this.formMetadata.dataTableConfiguration?.projection;
    const projection = this.formMetadata.projections?.find(
      (p) => p.name == projectionName
    );

    if (projection != undefined) {
      // this.formMetadata.fieldMetadata = projection.fieldMetadata;
    }
    // console.log(this.formMetadata);

    const metadata: DataTableFieldMetadata = {
      id: 'dataTable',
      showToolbar: true,
      selectable: this.formMetadata.dataTableConfiguration?.selectable,
      formMetadata: this.formMetadata,
    };

    this.formControl = createFormControl(metadata);
    const url = this.formMetadata.url as string;

    let prams = new HttpParams();
    if (projectionName) prams = prams.append('projection', projectionName);
    this.entityService
      .get(url, prams)
      // .pipe(map((d) => d._embedded[url]))
      .subscribe((d) => {
        const data = d._embedded[url];
        if (data) this.formControl.setValue(data, { emitEvent: false });
        this.formControl.extra = { page: d.page };
      });
  }

  onAction(action: FieldAction) {
    switch (action.type) {
      case 'requestMetadata':
        {
          const { id, type } = action;

          const model = action.payload as ReferenceListActionModel;
          const metadata = model.metadata as ReferenceListFieldMetadata;
          this.entityMetadata
            .getOne(metadata.reference)
            .subscribe((formMetadata) => {
              const parentFormMetadata = model.extFormGroup?.formMetadata;
              const idField = parentFormMetadata?.idField;

              const referenceModel: ReferenceListActionModel = {
                formMetadata,
              };

              if (idField != undefined) {
                const href = getValueByField(
                  idField,
                  model.extFormGroup?.value
                );
                const value = getId(href);
                referenceModel.searchParams = [
                  {
                    field: `${metadata.mappedBy}.id`,
                    operation: '=',
                    value,
                  },
                ];
              }
              let params;
              if (referenceModel.searchParams && formMetadata.url) {
                params = getHttpPrams(referenceModel.searchParams);
                this.entityService
                  .get(formMetadata.url, params)
                  .subscribe((d) => {
                    referenceModel.pagedData = {
                      data: d._embedded[formMetadata.url as string],
                      page: d.page as Page,
                    };

                    this.event = { type, payload: referenceModel, id };
                  });
              }
            });
        }
        break;
      case 'requestData':
        {
          this.event = {
            type: 'requestData',
            payload: [{ name: 'Randika' }],
            id: action.id,
          };
        }
        break;
      case 'edit':
        {
          const payload = action.payload as HateosResponse;
          if (payload._links != undefined) {
            const id = getIdFrom(payload);
            this.router.navigate([id], { relativeTo: this.activatedRoute });
          }
        }
        break;
      case 'link':
        {
          const payload = action.payload as HateosResponse;
          if (payload._links != undefined) {
            const id = getIdFrom(payload);
            if (action.reference) this.router.navigate([action.reference, id]);
          }
        }
        break;
      case 'save':
        {
          const id = action.reference as string;
          this.entityMetadata
            .getOne(id)
            .pipe(
              mergeMap((metadata) => {
                const payload = action.payload as ObjectWithLinks[];
                return this.entityService.saveAll(metadata, payload);
              })
            )
            .subscribe((d) => {
              console.log(d);

              // const obs: Observable<HateosResponse>[] = [];
              // payload.forEach((p) => {
              //   console.log(p);
              //   const ob = this.entityService.post<HateosResponse>(
              //     p,
              //     d.url as string
              //   );
              //   obs.push(ob);
              // });
              // zip(obs)
              //   .pipe(finalize(() => this.matSnackbar.open('Saved')))
              //   .subscribe();
            });
        }
        break;
    }
  }
}
