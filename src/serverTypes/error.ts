// https://developer.apple.com/documentation/applemusicapi/error
export interface Error {
  code: string;
  detail?: string;
  id: string;
  source?: Error.Source;
  status: string;
  title: string;
}

namespace Error {
  // https://developer.apple.com/documentation/applemusicapi/error/source
  export interface Source {
    parameter?: string;
    pointer?: any; // What is JSONPointer?
  }
}
