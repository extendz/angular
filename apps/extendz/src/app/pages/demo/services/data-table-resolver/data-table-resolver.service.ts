import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map, Observable, throwError } from 'rxjs';
import { DataTableResolverModel } from '../../models/data-table-resolver.model';
import { EntityMetadataService } from '../entity-metadata/entity-metadata.service';

@Injectable({ providedIn: 'root' })
export class DataTableResolverService
  implements Resolve<DataTableResolverModel>
{
  constructor(private entityMetadata: EntityMetadataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DataTableResolverModel> {
    const id = route.paramMap.get('model');
    if (id !== null)
      return this.entityMetadata.getOne(id).pipe(
        map((formMetadata) => {
          const returnOb: DataTableResolverModel = { formMetadata };
          return returnOb;
        })
      );
    else return throwError(() => new Error('Entity metadata id not found'));
  }
}
