import { Resource } from './resource';
import { Artwork } from './artwork';
import { ContentRating } from './contentRating';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { Preview } from './preview';
import { AlbumRelationship } from './albumRelationship';
import { ArtistRelationship } from './artistRelationship';
import { GenreRelationship } from './genreRelationship';

// https://developer.apple.com/documentation/applemusicapi/musicvideo
export interface MusicVideo extends Resource {
  attributes?: MusicVideo.Attributes;
  relationships?: MusicVideo.Relationships;
  type: 'musicVideos';
}

namespace MusicVideo {
  // https://developer.apple.com/documentation/applemusicapi/musicvideo/attributes
  export interface Attributes {
    albumName?: string;
    artistName: string;
    artwork: Artwork;
    contentRating?: ContentRating;
    durationInMillis?: number;
    editorialNotes?: EditorialNotes;
    genreNames: string[];
    isrc: string;
    name: string;
    playParams?: PlayParameters;
    previews: Preview[];
    releaseDate: Date;
    trackNumber?: number;
    url: string;
    videoSubType?: string;
    hasHDR: boolean;
    has4K: boolean;
  }

  // https://developer.apple.com/documentation/applemusicapi/musicvideo/relationships
  export interface Relationships {
    albums?: AlbumRelationship;
    artists?: ArtistRelationship;
    genres?: GenreRelationship;
  }
}
