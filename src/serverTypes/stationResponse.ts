import { ResponseRoot } from './responseRoot';
import { Station } from './station';

// https://developer.apple.com/documentation/applemusicapi/stationresponse
export interface StationResponse extends ResponseRoot {
  data: Station[];
}
