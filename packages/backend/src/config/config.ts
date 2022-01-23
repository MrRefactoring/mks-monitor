import { Service } from 'typedi';

@Service()
export class Config {
  mongoConnectionString: string;

  constructor() {
    // TODO prod should be enabled
    this.mongoConnectionString = '';
  }
}
