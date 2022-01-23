import { AbstractLogger } from './abstractLogger';
import { ConsoleLogger } from './consoleLogger';
import { FileLogger } from './fileLogger';
import { Service } from 'typedi';

@Service()
export class Logger {
  private logger: AbstractLogger;

  constructor() {
    this.logger = process.env.NODE_ENV === 'development' ? new ConsoleLogger() : new FileLogger();
  }

  info(message: string) {
    this.logger.info(message);
  }
}
