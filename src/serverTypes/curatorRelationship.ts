import { Relationship } from './relationship';
import { Curator } from './curator';

// https://developer.apple.com/documentation/applemusicapi/curatorrelationship
export interface CuratorRelationship extends Relationship {
  data: Curator[];
}
