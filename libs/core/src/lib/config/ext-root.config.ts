import { InjectionToken } from '@angular/core';
import { Cache } from './utils/cache';

export const EXT_ROOT_CONFIG = new InjectionToken('EXT_ROOT_CONFIG');

export interface ExtRootConfig {
  /*** Location for the icons for model */
  svgIconSet: string;

  /*** Metadata URL. This gives simple infomation. */
  metadataUrl: string;

  /*** Id feild for a given entity. ex: id */
  idFeild?: string;

  /*** Location for additinal infomation on enetity meta */
  partials?: string;

  /*** Cache for models and network requests */
  cache?: Cache;
}
