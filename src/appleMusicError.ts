import { ResponseRoot } from './serverTypes/responseRoot';

export class AppleMusicError extends Error {
  constructor(message: string, public httpStatusCode: number, public response?: ResponseRoot, ) {
    super(message);
  }
}
