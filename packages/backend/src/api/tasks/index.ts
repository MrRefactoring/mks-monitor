import { Router } from 'express';
import {getTasks} from "./getTasks";

export const taskRouter = Router()
  .get('/', getTasks);
