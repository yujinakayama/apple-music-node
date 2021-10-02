import { AlbumResponse } from './albumResponse';
import { ArtistResponse } from './artistResponse';
import { MusicVideoResponse } from './musicVideoResponse';
import { PlaylistResponse } from './playlistResponse';
import { ResponseRoot } from './responseRoot';
import { SongResponse } from './songResponse';

// https://developer.apple.com/documentation/applemusicapi/searchresponse
export interface SearchResponse extends ResponseRoot {
  results: {
    songs: SongResponse;
    albums: AlbumResponse;
    playlists: PlaylistResponse;
    artists: ArtistResponse;
    'music-videos': MusicVideoResponse;
  };
}
