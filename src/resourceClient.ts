import axios, { AxiosInstance, AxiosPromise, Method } from 'axios';

import { ClientConfiguration } from './clientConfiguration';
import { AppleMusicError } from './appleMusicError';
import { CalendarDate } from './calendarDate';

import { ResponseRoot } from './serverTypes/responseRoot';
import { Error } from './serverTypes/error';

interface Parameters {
  l?: string;
}

export class ResourceClient<T extends ResponseRoot> {
  private axiosInstance: AxiosInstance;

  constructor(public urlName: string, public configuration: ClientConfiguration) {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.music.apple.com/v1',
      headers: {
        Authorization: `Bearer ${this.configuration.developerToken}`
      },
      // https://github.com/axios/axios/blob/v0.20.0-0/lib/defaults.js#L57-L65
      transformResponse: [
        data => {
          /*eslint no-param-reassign:0*/
          if (typeof data === 'string') {
            try {
              data = parseJSONWithDateHandling(data);
            } catch (e) {
              /* Ignore */
            }
          }
          return data;
        }
      ],
      validateStatus: () => true // Handle errors by ourselves
    });
  }

  async get(id: string, options?: { storefront?: string; languageTag?: string }): Promise<T> {
    const storefront = options?.storefront || this.configuration.defaultStorefront;

    if (!storefront) {
      throw new Error(`Specify storefront with function parameter or default one with Client's constructor`);
    }

    const url = `/catalog/${storefront}/${this.urlName}/${id}`;

    let params: Parameters = {
      l: options?.languageTag || this.configuration.defaultLanguageTag
    };

    const httpResponse = await this.request('GET', url, params);

    if (!httpResponse.data) {
      throw new AppleMusicError(`Request failed with status code ${httpResponse.status}`, httpResponse.status);
    }

    const apiResponse = httpResponse.data as ResponseRoot;

    // https://developer.apple.com/documentation/applemusicapi/handling_requests_and_responses#3001632
    if (!apiResponse.errors) {
      return apiResponse as T;
    } else {
      const error = apiResponse.errors[0] as Error;
      throw new AppleMusicError(error.title, httpResponse.status, apiResponse);
    }
  }

  private request(method: Method, apiPath: string, params?: any): AxiosPromise {
    return this.axiosInstance.request({
      method: method,
      url: apiPath,
      params: params
    });
  }
}

const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

function parseJSONWithDateHandling(json: string) {
  return JSON.parse(json, (_key: any, value: any) => {
    if (typeof value !== 'string') {
      return value;
    }

    const calendarDate = CalendarDate.parse(value);

    if (calendarDate) {
      return calendarDate;
    }

    if (value.match(datePattern)) {
      return new Date(value);
    }

    return value;
  });
}
