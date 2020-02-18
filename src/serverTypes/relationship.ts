import { Resource } from './resource';

// https://developer.apple.com/documentation/applemusicapi/relationship
export interface Relationship {
  data?: Resource[];
  href?: string;
  meta?: Relationship.Meta;
  next?: string;
}

// https://developer.apple.com/documentation/applemusicapi/relationship/meta
namespace Relationship {
  export interface Meta {}
}
