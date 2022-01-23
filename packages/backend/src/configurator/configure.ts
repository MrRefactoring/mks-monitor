import { Express } from 'express';
import { mongoConfigurator } from './configurators';

export async function configure(app: Express) {
  app.disable('x-power-app');

  await mongoConfigurator();
}
