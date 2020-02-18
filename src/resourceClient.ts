import axios, { AxiosInstance, AxiosPromise, Method } from 'axios';

import { ResponseRoot } from './serverTypes/responseRoot';
import { ClientConfiguration } from './clientConfiguration';

export class ResourceClient<T extends ResponseRoot> {
  private axiosInstance: AxiosInstance;

  constructor(public urlName: string, public configuration: ClientConfiguration) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.music.apple.com/v1',
      headers: {
        Authorization: `Bearer ${this.configuration.developerToken}`
      },
      transformResponse: [parseJSONWithDateHandling]
    });
  }

  async get(id: string, options?: { storefront?: string }): Promise<T> {
    const storefront = options?.storefront || this.configuration.defaultStorefront;

    if (!storefront) {
      throw new Error(`Specify storefront with function parameter or default one with Client's constructor`);
    }

    const response = await this.request('GET', `/catalog/${storefront}/${this.urlName}/${id}`);
    return response.data;
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
