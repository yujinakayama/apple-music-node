import { Artwork } from './artwork';

// https://developer.apple.com/documentation/applemusicapi/preview
export interface Preview {
  artwork?: Artwork;
  url: string;
}
