import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AbstractEntityMetadataService,
  EntityMetadata,
  EntityMetadataResponse,
  FieldMetadata,
  HateosPagedResponse,
} from '@extendz/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { ROOT_CONFIG } from '../../extendz.config';

@Injectable({ providedIn: 'root' })
export class EntityMetadataService implements AbstractEntityMetadataService {
  private entityMetaResponse?: EntityMetadataResponse;
  private cache: EntityMetadataResponse = {};
  private url = ROOT_CONFIG.metadataUrl;

  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  getFields(entityMetadata: EntityMetadata): Observable<FieldMetadata[]> {
    if (entityMetadata.fields != undefined) return of(entityMetadata.fields);
    else return this.getFieldsById(entityMetadata.id);
  }

  getFieldsById(id: string): Observable<FieldMetadata[]> {
    return this.getOne(id).pipe(map((d) => <FieldMetadata[]>d.fields));
  }

  getAll(): Observable<EntityMetadataResponse> {
    if (this.entityMetaResponse) return of(this.entityMetaResponse);
    return this.http.get<HateosPagedResponse>(this.url).pipe(
      take(1),
      // tap((res) => (this.entityMetaResponse = res)),
      map((res) => {
        const all = res._embedded.extendzes as EntityMetadata[];
        const x: EntityMetadataResponse = {};
        all.forEach((i) => (x[i.id] = i));
        return x;
      })
    );
  }

  getOne(id: string): Observable<EntityMetadata> {
    return this.http.get<EntityMetadata>(`${this.url}/${id}`).pipe(take(1));
  }

  save(entityMetadata: EntityMetadata): Observable<EntityMetadata> {
    return this.http.post<EntityMetadata>(this.url, entityMetadata).pipe(
      take(1),
      catchError((res: HttpErrorResponse) => {
        this.matSnackBar.open(res.error.message, undefined, {
          panelClass: 'sb-e',
        });
        return throwError(res);
      })
    );
  }
}
