import { EntityEventType } from './entity-event-type';

export interface EntityEvent {
  type: EntityEventType;
  payload?: any;
  /*** Index number in case of row related event */
  index?: number;
}
