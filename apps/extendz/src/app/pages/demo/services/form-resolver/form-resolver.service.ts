import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map, mergeMap, Observable, throwError } from 'rxjs';
import { FormResolverModel } from '../../models/data-table-resolver.model';
import { EntityMetadataService } from '../entity-metadata/entity-metadata.service';
import { EntityService } from '../entity-service/entity.service';

@Injectable({
  providedIn: 'root',
})
export class FormResolverService implements Resolve<FormResolverModel> {
  constructor(
    private entityMetadata: EntityMetadataService,
    private entityService: EntityService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<FormResolverModel> {
    const model = route.paramMap.get('model');
    const id: string = route.paramMap.get('id') as string;

    if (model !== null)
      return this.entityMetadata.getOne(model).pipe(
        mergeMap((formMetadata) => {
          return this.entityService.getByFormMetadata(formMetadata, id).pipe(
            map((record) => {
              const returnOb: FormResolverModel = { formMetadata, record };
              return returnOb;
            })
          );
        })
      );
    else return throwError(() => new Error('Entity metadata id not found'));
  }
}
