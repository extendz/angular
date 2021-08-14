import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AbstractIconDataService,
  HateosPagedResponse,
  Icon,
} from '@extendz/core';
import { map, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IconDataService implements AbstractIconDataService {
  constructor(private http: HttpClient, private matSnackBar: MatSnackBar) {}

  getAll(searchText?: string): Observable<Icon[]> {
    console.log(searchText);

    let params = new HttpParams();
    params = params.append('name', searchText as string);
    return this.http.get<HateosPagedResponse>('/api/icons', { params }).pipe(
      take(1),
      map((r) => r._embedded['icons'] as Icon[])
    );
  }

  getOne<T>(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
