import { ResponseRoot } from './responseRoot';
import { Album } from './album';

// https://developer.apple.com/documentation/applemusicapi/albumresponse
export interface AlbumResponse extends ResponseRoot {
  data: Album[];
}
