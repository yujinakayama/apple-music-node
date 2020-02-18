import { Relationship } from './relationship';
import { MusicVideo } from './musicVideo';

// https://developer.apple.com/documentation/applemusicapi/musicvideorelationship
export interface MusicVideoRelationship extends Relationship {
  data: MusicVideo[];
}
