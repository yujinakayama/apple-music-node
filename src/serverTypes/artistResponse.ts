import { ResponseRoot } from './responseRoot';
import { Artist } from './artist';

// https://developer.apple.com/documentation/applemusicapi/artistresponse
export interface ArtistResponse extends ResponseRoot {
  data: Artist[];
}
