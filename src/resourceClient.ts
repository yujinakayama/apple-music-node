import axios, { AxiosInstance, AxiosPromise, Method } from 'axios';

import { ClientConfiguration } from './clientConfiguration';
import { AppleMusicError } from './appleMusicError';

import { ResponseRoot } from './serverTypes/responseRoot';
import { Error } from './serverTypes/error';

export class ResourceClient<T extends ResponseRoot> {
  private axiosInstance: AxiosInstance;

  constructor(public urlName: string, public configuration: ClientConfiguration) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.music.apple.com/v1',
      headers: {
        Authorization: `Bearer ${this.configuration.developerToken}`
      },
      transformResponse: [parseJSONWithDateHandling],
      validateStatus: () => true // Handle errors by ourselves
    });
  }

  async get(id: string, options?: { storefront?: string }): Promise<T> {
    const storefront = options?.storefront || this.configuration.defaultStorefront;

    if (!storefront) {
      throw new Error(`Specify storefront with function parameter or default one with Client's constructor`);
    }

    const httpResponse = await this.request('GET', `/catalog/${storefront}/${this.urlName}/${id}`);
    const apiResponse = httpResponse.data as ResponseRoot;

    // https://developer.apple.com/documentation/applemusicapi/handling_requests_and_responses#3001632
    if (!apiResponse.errors) {
      return apiResponse as T;
    } else {
      const error = apiResponse.errors[0] as Error
      throw new AppleMusicError(error.title, apiResponse, httpResponse.status);
    }
  }

  private request(method: Method, apiPath: string): AxiosPromise {
    return this.axiosInstance.request({
      method: method,
      url: apiPath
    });
  }
}

const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function parseJSONWithDateHandling(json: string) {
  return JSON.parse(json, (key: any, value: any) => {
    if (typeof value === 'string' && value.match(datePattern)) {
      return new Date(value);
    } else {
      return value;
    }
  });
}
