import { HttpParams } from '@angular/common/http';
import { SearchParam } from '@extendz/core';

export function getHttpPrams(searchParams: SearchParam[]): HttpParams {
  let httpParams = new HttpParams();
  searchParams.forEach((s) => {
    httpParams = httpParams.append(s.field, s.value);
  });
  return httpParams;
}
