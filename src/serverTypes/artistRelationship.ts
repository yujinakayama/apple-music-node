import { Relationship } from './relationship';
import { Artist } from './artist';

// https://developer.apple.com/documentation/applemusicapi/artistrelationship
export interface ArtistRelationship extends Relationship {
  data: Artist[];
}
