import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AbstractEntityMetadataService,
  FieldMetadata,
  FormMetadata,
  FormMetadataResponse,
  HateosPagedResponse,
} from '@extendz/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, first, map, take } from 'rxjs/operators';
import { ROOT_CONFIG } from '../../extendz.config';

@Injectable({ providedIn: 'root' })
export class EntityMetadataService implements AbstractEntityMetadataService {
  private entityMetaResponse?: FormMetadataResponse;
  private cache: FormMetadataResponse = {};
  private url = ROOT_CONFIG.metadataUrl;

  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  getFields(entityMetadata: FormMetadata): Observable<FieldMetadata[]> {
    if (entityMetadata.fieldMetadata != undefined)
      return of(entityMetadata.fieldMetadata);
    else return this.getFieldsById(entityMetadata.id);
  }

  getFieldsById(id: string): Observable<FieldMetadata[]> {
    return this.getOne(id).pipe(map((d) => <FieldMetadata[]>d.fieldMetadata));
  }

  getAll(): Observable<FormMetadataResponse> {
    if (this.entityMetaResponse) return of(this.entityMetaResponse);
    return this.http.get<HateosPagedResponse>(this.url).pipe(
      take(1),
      // tap((res) => (this.entityMetaResponse = res)),
      map((res) => {
        const all = res._embedded.formMetadatas as FormMetadata[];
        const x: FormMetadataResponse = {};
        all.forEach((i) => (x[i.id] = i));
        return x;
      })
    );
  }

  getOne(id: string): Observable<FormMetadata> {
    return this.http.get<FormMetadata>(`${this.url}/${id}`).pipe(first());
  }

  save(entityMetadata: FormMetadata): Observable<FormMetadata> {
    return this.http.post<FormMetadata>(this.url, entityMetadata).pipe(
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
