import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  clearUrl,
  FormMetadata,
  HateosPagedResponse,
  HateosResponse,
  ObjectWithLinks,
} from '@extendz/core';
import {
  defaultIfEmpty,
  delay,
  first,
  from,
  map,
  mergeMap,
  Observable,
  of,
  take,
  zip,
} from 'rxjs';

export interface PropertyFile {
  name: string;
  file: File;
}

export interface SavePayload {
  payload: any;
  // propertyName: string;
  // property?: Property;
  // parentEntityMeta?: EntityMeta;
}

export interface RestAndFiles {
  payload?: any;
  files?: PropertyFile[];
  preSave?: SavePayload[];
  postSave?: SavePayload[];
  patchRequests?: any[];
}

@Injectable({ providedIn: 'root' })
export class EntityService {
  constructor(private http: HttpClient) {}

  get(url: string, params: HttpParams): Observable<HateosPagedResponse> {
    return this.http
      .get<HateosPagedResponse>('/api/' + url, { params })
      .pipe(first());
  }

  getByFormMetadata(formMetadata: FormMetadata, id: string) {
    return this.http
      .get<HateosResponse>(`/api/${formMetadata.url}/${id}`)
      .pipe(first());
  }

  post<T>(url: string, payload: HateosResponse): Observable<T> {
    if (payload._links != undefined)
      return this.http
        .patch<T>(payload._links.self?.href, payload)
        .pipe(first());
    else return this.http.post<T>(`/api/${url}`, payload).pipe(first());
  }

  saveAll(metadata: FormMetadata, formData: ObjectWithLinks[]) {
    const obs: Observable<HateosResponse>[] = [];
    formData.forEach((data) => {
      let request: Observable<any> = of();
      const { payload, files } = this.processFormData(data, metadata);
      // If there is link its a patch/put
      if (data._links) {
        const url = clearUrl(data._links.self.href);
        request = this.http.patch<ObjectWithLinks>(url, payload);
      } else {
        if (metadata.url != undefined)
          request = this.post<ObjectWithLinks>(metadata.url, payload);
      }
      request = request.pipe(
        first(),
        mergeMap((d: ObjectWithLinks) =>
          this.uploadFiles(d, files).pipe(map(() => d))
        )
      );
      obs.push(request);
    });
    return zip(obs);
  }

  uploadFiles(data: ObjectWithLinks, files: PropertyFile[] | undefined) {
    if (files != undefined)
      return from(files).pipe(
        mergeMap((file) => {
          console.log(file, data);

          const pathVar = file.name;
          let href = '';
          if (data._links) href = data._links.self.href;
          const url = `${href}/${pathVar}`;
          const formData = new FormData();
          formData.append(pathVar, file.file);
          return this.http.post(url, formData).pipe(first(), delay(1500));
        })
      );
    else return of({}).pipe(first());
  }

  private processFormData(
    formdata: ObjectWithLinks,
    metadata: FormMetadata
  ): RestAndFiles {
    const payload: ObjectWithLinks = {};
    const files: PropertyFile[] = [];
    //
    // metadata.readOnlyFields?.forEach((field) => {
    //   payload[field] = formdata[field];
    // });

    metadata.fieldMetadata.forEach((field) => {
      const value = formdata[field.id];
      if (value == undefined) return;

      switch (field.type) {
        case 'image':
        case 'image-list':
          files.push({ file: value, name: field.id });
          break;
        default:
          payload[field.id] = value;
          break;
      }
    });

    return {
      payload,
      files,
    };
  }
}
