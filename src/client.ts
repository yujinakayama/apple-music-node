import { ClientConfiguration } from './clientConfiguration';
import { ResourceClient } from './resourceClient';

import { AlbumResponse } from './serverTypes/albumResponse';
import { ArtistResponse } from './serverTypes/artistResponse';
import { MusicVideoResponse } from './serverTypes/musicVideoResponse';
import { PlaylistResponse } from './serverTypes/playlistResponse';
import { SongResponse } from './serverTypes/songResponse';
import { StationResponse } from './serverTypes/stationResponse';

export class Client {
  configuration: ClientConfiguration;

  albums: ResourceClient<AlbumResponse>;
  artists: ResourceClient<ArtistResponse>;
  musicVideos: ResourceClient<MusicVideoResponse>;
  playlists: ResourceClient<PlaylistResponse>;
  songs: ResourceClient<SongResponse>;
  stations: ResourceClient<StationResponse>;

  constructor(configuration: ClientConfiguration) {
    this.configuration = configuration;

    this.albums = new ResourceClient<AlbumResponse>('albums', this.configuration);
    this.artists = new ResourceClient<ArtistResponse>('artists', this.configuration);
    this.musicVideos = new ResourceClient<MusicVideoResponse>('music-videos', this.configuration);
    this.playlists = new ResourceClient<PlaylistResponse>('playlists', this.configuration);
    this.songs = new ResourceClient<SongResponse>('songs', this.configuration);
    this.stations = new ResourceClient<StationResponse>('stations', this.configuration);
  }
}
