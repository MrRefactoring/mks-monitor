import { Router } from 'express';
import { taskRouter } from './tasks';

export const router = Router()
  .use('/tasks', taskRouter);
