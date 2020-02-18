import { Resource } from './resource';
import { Error } from './error';

// https://developer.apple.com/documentation/applemusicapi/responseroot
export interface ResponseRoot {
  data?: Resource[];
  errors?: Error[];
  href?: string;
  meta?: ResponseRoot.Meta;
  next?: string;
  results?: ResponseRoot.Results;
}

namespace ResponseRoot {
  // https://developer.apple.com/documentation/applemusicapi/responseroot/meta
  export interface Meta {}

  // https://developer.apple.com/documentation/applemusicapi/responseroot/results
  export interface Results {}
}
