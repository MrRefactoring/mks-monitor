import * as mongoose from 'mongoose';
import { Config } from '../../config';
import { Container } from 'typedi';
import { Logger } from '../../services';

export async function mongoConfigurator() {
  const config = Container.get(Config);
  const logger = Container.get(Logger);

  logger.info('Connecting to MongoDb...');

  await mongoose.connect(config.mongoConnectionString, { dbName: 'makerBase' });

  logger.info('Connected to MongoDb');
}
