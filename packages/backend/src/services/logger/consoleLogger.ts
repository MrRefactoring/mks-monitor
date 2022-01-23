import { AbstractLogger } from './abstractLogger';

export class ConsoleLogger implements AbstractLogger {
  info(message: string): void {
    console.info(message);
  }
}
