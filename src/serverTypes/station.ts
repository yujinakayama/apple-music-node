import { Resource } from './resource';
import { Artwork } from './artwork';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';

// https://developer.apple.com/documentation/applemusicapi/station
export interface Station extends Resource {
  attributes?: Station.Attributes;
  type: 'stations';
}

namespace Station {
  // https://developer.apple.com/documentation/applemusicapi/station/attributes
  export interface Attributes {
    artwork: Artwork;
    durationInMillis?: number;
    editorialNotes?: EditorialNotes;
    episodeNumber?: number;
    isLive: boolean;
    name: string;
    playParams?: PlayParameters; // Undocumented but supported
    url: string;
  }
}
