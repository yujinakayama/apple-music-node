import { ResponseRoot } from './responseRoot';
import { MusicVideo } from './musicVideo';

// https://developer.apple.com/documentation/applemusicapi/musicvideoresponse
export interface MusicVideoResponse extends ResponseRoot {
  data: MusicVideo[];
}
