import {
  EXT_ENTITY_METADATA_SERVICE,
  EXT_ICON_DATA_SERVICE,
} from '@extendz/core';
import { EntityMetadataService } from './services/entity-metadata/entity-metadata.service';
import { IconDataService } from './services/icon-data/icon-data.service';

export const METADATA_PROVIDER = {
  provide: EXT_ENTITY_METADATA_SERVICE,
  useClass: EntityMetadataService,
};

export const ICONDATA_PROVIDER = {
  provide: EXT_ICON_DATA_SERVICE,
  useClass: IconDataService,
};
