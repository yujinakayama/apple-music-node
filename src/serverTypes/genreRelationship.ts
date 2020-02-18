import { Relationship } from './relationship';
import { Genre } from './genre';

// https://developer.apple.com/documentation/applemusicapi/genrerelationship
export interface GenreRelationship extends Relationship {
  data: Genre[];
}
