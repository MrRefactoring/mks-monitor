import * as express from 'express';
import { Express } from 'express';

export async function appConfigurator(app: Express) {
  app.disable('x-power-app');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}
