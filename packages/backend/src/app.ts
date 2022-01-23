import 'reflect-metadata';
// eslint-disable-next-line sort-imports
import * as express from 'express';
import { configure } from './configurator';
import { Container } from 'typedi';
import { Logger } from './services';

async function startServer() {
  const logger = Container.get(Logger);

  const app = express();

  await configure(app);

  app.listen(8080, () => logger.info('Started at 8080'));
}

startServer();
