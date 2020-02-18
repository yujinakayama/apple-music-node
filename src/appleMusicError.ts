import { ResponseRoot } from './serverTypes/responseRoot';

export class AppleMusicError extends Error {
  constructor(message: string, public response: ResponseRoot, public httpStatusCode: number) {
    super(message);
  }
}
