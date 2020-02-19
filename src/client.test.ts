import { Client } from './client';
import * as process from 'process';
import { AppleMusicError } from './appleMusicError';

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

  test('handles errors', async () => {
    let catched = false;

    try {
      const response = await client.playlists.get('pl.5ee8333dbe944d9f9151e97d92d1ead9', { storefront: 'foo' });
    } catch (error) {
      catched = true;
      expect(error).toBeInstanceOf(AppleMusicError);
      expect(error.httpStatusCode).toBe(400);
      expect(error.response.errors[0].title).toEqual('Unknown Storefront');
    }

    expect(catched).toBeTruthy();
  });

  test('supports language tags', async () => {
    const id = 'pl.5ee8333dbe944d9f9151e97d92d1ead9';

    const defaultLanguageResponse = await client.playlists.get(id, { storefront: 'jp' });
    expect(defaultLanguageResponse.data[0].attributes!.name).toEqual('Ａリスト：ポップ');

    const englishResponse = await client.playlists.get(id, { storefront: 'jp', languageTag: 'en-US' });
    expect(englishResponse.data[0].attributes!.name).toEqual('A-List Pop');
  });
});
