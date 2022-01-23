import { AbstractLogger } from './abstractLogger';

export class FileLogger implements AbstractLogger {
  info(message: string) {
    // TODO
    console.log(message);
  }
}
