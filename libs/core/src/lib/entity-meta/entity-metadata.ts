import { FieldMetadata } from '../form/field';
import { Icon } from '../models/icon';

export interface EntityMetadata {
  /*** For display purpose this value will be used */
  label: string;

  /*** id for the entity meta */
  id: string;

  /*** Url for the data source */
  url: string;

  backgroundColor: string;

  /*** Icon color */
  color: string;

  icon: Icon;

  fields?: FieldMetadata[];

  // /*** Custom action */
  // actions?: string[];

  // /*** Properties of the entity */
  // properties?: {
  //   [key: string]: Property;
  // };

  // /***
  //  *
  //  */
  // search?: Search;

  // /*** Configurations for different parts*/
  // config?: Config;

  // /*** Validators */
  // validators?: Validation[];

  // /*** Hide visually */
  // hidden?: boolean;

  // /*** Cache */
  // cache?: {
  //   model?: boolean;

  //   /*** Refernce models need to cache along */
  //   references?: string[];

  //   network?: boolean;

  //   /*** */
  //   endPoints?: string[];
  // };
}
