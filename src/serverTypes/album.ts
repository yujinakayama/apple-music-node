import { CalendarDate } from '../calendarDate';

import { Resource } from './resource';
import { Artwork } from './artwork';
import { ContentRating } from './contentRating';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { ArtistRelationship } from './artistRelationship';
import { GenreRelationship } from './genreRelationship';
import { TrackRelationship } from './trackRelationship';

// https://developer.apple.com/documentation/applemusicapi/album
export interface Album extends Resource {
  attributes?: Album.Attributes;
  relationships?: Album.Relationships;
  type: 'albums';
}

namespace Album {
  // https://developer.apple.com/documentation/applemusicapi/album/attributes
  export interface Attributes {
    albumName: string;
    artistName: string;
    artwork?: Artwork;
    contentRating?: ContentRating;
    copyright?: string;
    editorialNotes?: EditorialNotes;
    genreNames: string[];
    isComplete: boolean;
    isSingle: boolean;
    name: string;
    playParams?: PlayParameters;
    recordLabel: string;
    releaseDate: CalendarDate;
    trackCount: number;
    url: string;
    isMasteredForItunes: boolean;
  }

  // https://developer.apple.com/documentation/applemusicapi/album/relationships
  export interface Relationships {
    artists?: ArtistRelationship;
    genres?: GenreRelationship;
    tracks?: TrackRelationship;
  }
}
