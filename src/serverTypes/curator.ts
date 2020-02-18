import { Resource } from './resource';
import { Artwork } from './artwork';
import { EditorialNotes } from './editorialNotes';
import { PlaylistRelationship } from './playlistRelationship';

// https://developer.apple.com/documentation/applemusicapi/curator
export interface Curator extends Resource {
  attributes?: Curator.Attributes;
  relationships?: Curator.Relationships;
  type: 'curators';
}

namespace Curator {
  // https://developer.apple.com/documentation/applemusicapi/curator/attributes
  export interface Attributes {
    artwork: Artwork;
    editorialNotes?: EditorialNotes;
    name: string;
    url: string;
  }

  // https://developer.apple.com/documentation/applemusicapi/curator/relationships
  export interface Relationships {
    playlists?: PlaylistRelationship;
  }
}
