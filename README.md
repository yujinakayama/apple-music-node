# Node.js Client for Apple Music

The Node.js client for Apple Music is a client library for [Apple Music API](https://developer.apple.com/documentation/applemusicapi) built with TypeScript.

Currently this library provides only a feature to fetch a single resource such as album, artists, songs, playlists, music videos, or stations.

Note that this does not related to [MusicKit JS](https://developer.apple.com/documentation/musickitjs), which is the official library of Apple Music for web apps.

## Requirements

You need to be a member of the [Apple Developer Program](https://developer.apple.com/programs/) and obtain your [Apple Music developer token](https://developer.apple.com/documentation/applemusicapi/getting_keys_and_creating_tokens) with some tools such as [apple-music-token-node](https://github.com/sheminusminus/apple-music-token-node).

## Installation

Install the package with:

```
npm install --save @yujinakayama/apple-music
```

Type definitions for TypeScript are also included in the package.

## Usage

You need to instantiate a client with your developer token:

```typescript
import { Client } from "@yujinakayama/apple-music";

const client = new Client({ developerToken: 'YOUR_DEVELOPER_TOKEN' });
```

### Fetching Single Resource

You can fetch album, artists, songs, playlists, music videos, or stations with `client.RESOURCES.get()`:

```typescript
async function main() {
  const client = new Client({ developerToken: 'YOUR_DEVELOPER_TOKEN' });

  const playlistID = 'pl.5ee8333dbe944d9f9151e97d92d1ead9';
  const response = await client.playlists.get(playlistID, { storefront: 'us' });
  const playlist = response.data[0];

  console.log(playlist.attributes!);
  // {
  //   artwork: {
  //     width: 4320,
  //     height: 1080,
  //     url: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/f7/25/2e/f7252e6c-921b-6475-7b34-754f3ca0ef1a/source/{w}x{h}cc.jpeg',
  //     bgColor: '0051cc',
  //     textColor1: 'e4fe63',
  //     textColor2: 'f3e8f1',
  //     textColor3: 'b6db78',
  //     textColor4: 'c2c9ea'
  //   },
  //   isChart: false,
  //   url: 'https://music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9',
  //   lastModifiedDate: 2020-02-14T05:00:26.000Z,
  //   name: 'A-List Pop',
  //   playlistType: 'editorial',
  //   curatorName: 'Apple Music Pop',
  //   playParams: { id: 'pl.5ee8333dbe944d9f9151e97d92d1ead9', kind: 'playlist' },
  //   description: {
  //     standard: "The title track from Sam Smith’s forthcoming third album, “To Die For” was inspired by Abbot Kinney—the iconic beach-adjacent boulevard in Los Angeles’ Venice neighborhood. “I was walking down there on a Sunday and everyone was happy because everyone's happy on that road,” Smith tells Apple Music. “Just partners everywhere, kissing, and families. And it's basically about that—about feeling alone and feeling like you're on the outside watching everyone else together.” Add A-List Pop to your library to stay up on the latest and greatest pop music.",
  //     short: `Sam Smith's new song is inspired by "the most beautiful road in America."`
  //   }
  // }
}

main();
```

### Handling Errors

You can handle [API errors](https://developer.apple.com/documentation/applemusicapi/error) as:

```typescript
async function main() {
  const client = new Client({ developerToken: 'YOUR_DEVELOPER_TOKEN' });

  try {
    const response = await client.playlists.get('nosuchplaylist', { storefront: 'us' });
  } catch (error) {
    console.log(error.httpStatusCode);
    // 404

    console.log(error.response.errors[0])
    // {
    //   id: 'LVZEECBHZRR4HII432DE7VDF6E',
    //   title: 'Resource Not Found',
    //   detail: 'Resource with requested id was not found',
    //   status: '404',
    //   code: '40400'
    // }
    }
  }
}

main();
```

### Specifying Storefront

You _must_ specify storefront either:

* `defaultStorefront` parameter in the constructor
* `storefront` parameter in `get()`

```typescript
const client = new Client({
  developerToken: 'YOUR_DEVELOPER_TOKEN',
  defaultStorefront: 'us'
});

const response = await client.playlists.get(playlistID);
```

```typescript
const client = new Client({
  developerToken: 'YOUR_DEVELOPER_TOKEN',
});

const response = await client.playlists.get(playlistID, { storefront: 'us' });
```

### Specifying Language Tag

You can specify language tag either:

* Unspecify for the storefront's default language 
* `defaultLanguageTag ` parameter in the constructor
* `languageTag` parameter in `get()`

```typescript
const client = new Client({
  developerToken: 'YOUR_DEVELOPER_TOKEN',
  defaultStorefront: 'jp'
});

// The storefront's default
const response = await client.playlists.get(playlistID);
```

```typescript
const client = new Client({
  developerToken: 'YOUR_DEVELOPER_TOKEN',
  defaultStorefront: 'jp',
  defaultLanguageTag: 'en-US'
});

const response = await client.playlists.get(playlistID);
```

```typescript
const client = new Client({
  developerToken: 'YOUR_DEVELOPER_TOKEN',
  defaultStorefront: 'jp',
});

const response = await client.playlists.get(playlistID, { languageTag: 'en-US' });
```

## License

Copyright (c) 2020 Yuji Nakayama

See the [LICENSE.txt](LICENSE.txt) for details.
