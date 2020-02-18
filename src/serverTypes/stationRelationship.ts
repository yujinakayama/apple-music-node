import { Relationship } from './relationship';
import { Station } from './station';

// https://developer.apple.com/documentation/applemusicapi/stationrelationship
export interface StationRelationship extends Relationship {
  data: Station[];
}
