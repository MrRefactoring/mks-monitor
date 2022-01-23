import { Express } from 'express';
import { routesConfigurator } from './configurators/routesConfigurator';
import { appConfigurator, mongoConfigurator } from './configurators';

export async function configure(app: Express) {
  await appConfigurator(app);
  await routesConfigurator(app);
  await mongoConfigurator();
}
