import { ResponseRoot } from './responseRoot';
import { Playlist } from './playlist';

// https://developer.apple.com/documentation/applemusicapi/playlistresponse
export interface PlaylistResponse extends ResponseRoot {
  data: Playlist[];
}
