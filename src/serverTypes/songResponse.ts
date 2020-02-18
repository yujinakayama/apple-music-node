import { ResponseRoot } from './responseRoot';
import { Song } from './song';

// https://developer.apple.com/documentation/applemusicapi/songresponse
export interface SongResponse extends ResponseRoot {
  data: Song[];
}
