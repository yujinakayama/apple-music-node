import { Resource } from './resource';
import { Artwork } from './artwork';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { CuratorRelationship } from './curatorRelationship';
import { TrackRelationship } from './trackRelationship';

// https://developer.apple.com/documentation/applemusicapi/playlist
export interface Playlist extends Resource {
  attributes?: Playlist.Attributes;
  relationships?: Playlist.Relationships;
  type: 'playlists';
}

namespace Playlist {
  // https://developer.apple.com/documentation/applemusicapi/playlist/attributes
  export interface Attributes {
    artwork?: Artwork;
    curatorName?: string;
    description?: EditorialNotes;
    lastModifiedDate: Date;
    name: string;
    playParams?: PlayParameters;
    playlistType: 'user-shared' | 'editorial' | 'external' | 'personal-mix';
    url: string;
  }

  // https://developer.apple.com/documentation/applemusicapi/playlist/relationships
  export interface Relationships {
    curator?: CuratorRelationship;
    tracks?: TrackRelationship;
  }
}
