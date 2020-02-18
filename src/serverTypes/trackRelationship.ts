import { Song } from './song';
import { MusicVideo } from './musicVideo';

// https://developer.apple.com/documentation/applemusicapi/trackrelationship
export interface TrackRelationship {
  data: Song | MusicVideo;
}
