import * as mongoose from 'mongoose';
import { Config } from '../../config';
import { Container } from 'typedi';

export async function mongoConfigurator() {
  const config = Container.get(Config);

  await mongoose.connect(config.mongoConnectionString);
}
