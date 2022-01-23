import { Service } from 'typedi';

@Service()
export class Config {
  apiPrefix = '/api/v1';
  mongoConnectionString: string;

  constructor() {
    // TODO prod should be enabled
    this.mongoConnectionString = 'mongodb://localhost:27017';
  }
}
