import { Relationship } from './relationship';
import { Playlist } from './playlist';

// https://developer.apple.com/documentation/applemusicapi/playlistrelationship
export interface PlaylistRelationship extends Relationship {
  data: Playlist[];
}
