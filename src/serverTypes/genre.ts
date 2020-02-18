import { Resource } from './resource';

// https://developer.apple.com/documentation/applemusicapi/genre
export interface Genre extends Resource {
  attributes?: Genre.Attributes;
  type: 'genres';
}

namespace Genre {
  // https://developer.apple.com/documentation/applemusicapi/genre/attributes
  export interface Attributes {
    name: string;
  }
}
