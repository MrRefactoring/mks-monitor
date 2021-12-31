import { Printer } from './groups';

export interface Request {
  url: string;
  method: string;
}

export class Api {
  printer = new Printer(this);

  async sendRequest<T = unknown>(request: Request): Promise<T> {
    return Promise.resolve(request as unknown as T);
  }
}
