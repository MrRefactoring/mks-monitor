import { Config } from '../../config';
import { Container } from 'typedi';
import { Express } from 'express';
import { router } from '../../api';
import { Logger } from '../../services';

export async function routesConfigurator(app: Express) {
  const config = Container.get(Config);
  const logger = Container.get(Logger);

  app.use(config.apiPrefix, router);

  logger.info('✔️ API routes initialized.');
}
