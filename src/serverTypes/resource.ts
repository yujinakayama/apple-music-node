// https://developer.apple.com/documentation/applemusicapi/resource
export interface Resource {
  attributes?: Resource.Attributes;
  href?: string;
  id: string;
  relationships?: Resource.Relationships;
  type: string;
  meta?: Resource.Meta;
}

namespace Resource {
  // https://developer.apple.com/documentation/applemusicapi/resource/attributes
  export interface Attributes {}

  // https://developer.apple.com/documentation/applemusicapi/resource/relationships
  export interface Relationships {}

  // https://developer.apple.com/documentation/applemusicapi/resource/meta
  export interface Meta {}
}
