import { Client } from './client';
import * as process from 'process';

const developerToken = process.env['APPLE_MUSIC_DEVELOPER_TOKEN']!;

// TODO: Mock request with something like Ruby's VCR
describe('Client', () => {
  let client: Client;

  beforeEach(() => {
    client = new Client({ developerToken });
  });

  test('handles Playlist.Attributes.lastModifiedDate as Date object', async () => {
    // https://music.apple.com/jp/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9?l=en
    const response = await client.playlists.get('pl.5ee8333dbe944d9f9151e97d92d1ead9', { storefront: 'jp' });
    const playlist = response.data[0];
    expect(playlist.attributes!.lastModifiedDate.getFullYear()).toBeGreaterThanOrEqual(2020);
  });
});
