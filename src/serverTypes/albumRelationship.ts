import { Relationship } from './relationship';
import { Album } from './album';

// https://developer.apple.com/documentation/applemusicapi/albumrelationship
export interface AlbumRelationship extends Relationship {
  data: Album[];
}
