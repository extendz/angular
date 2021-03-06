/**
 *    Copyright 2018 the original author or authors
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { of } from 'rxjs/observable/of';

import { ExtRestConfig, RestService } from '../rest';
import { ModelMeta, ExtModelMetaConfig } from './models';

@Injectable()
export class ModelMetaService {
  /**
   * Models exposed
   */
  modelMap: Map<string, ModelMeta>;
  /**
   * True when all models are loaded.
   */
  initiated: boolean;

  constructor(private config: ExtModelMetaConfig, private rest: RestService) {}

  /**
   * Get a single module
   *
   * @param model
   * @param projecion
   */
  getModel(model: string, projecion?: string) {
    if (this.modelMap && this.modelMap.has(model)) {
      return of(this.modelMap.get(model));
    } else {
      let params: HttpParams = new HttpParams();
      if (projecion) {
        params = params.append('projection', projecion);
      }
      let url = this.config.modelsUrl + '/' + model.toLowerCase();
      return this.rest
        .get(url, { params })
        .pipe(tap((modelMeta: ModelMeta) => this.addToMap(modelMeta)));
    }
  } // getModel()

  private addToMap(modelMeta: ModelMeta, projection?: string) {
    if (!this.modelMap) this.modelMap = new Map();
    this.modelMap.set(modelMeta.name + '_' + projection, modelMeta);
  }

  /** Get all the models exposed by the backend.*/
  getModels(): Observable<ModelMeta[]> {
    if (this.initiated) {
      return of(Array.from(this.modelMap.values()));
    } else
      return this.rest.get(this.config.modelsUrl).pipe(
        tap((modelMetas: ModelMeta[]) => {
          this.initiated = true;
          modelMetas.forEach(modelMeta => this.addToMap(modelMeta));
        })
      );
  } // getModels()
} // class
