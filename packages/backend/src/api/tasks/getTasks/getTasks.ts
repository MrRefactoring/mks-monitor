import { NextFunction, Request, Response } from 'express';

export async function getTasks(req: Request, res: Response, next: NextFunction) {
  try {
    res.json({});
  } catch (e) {
    next(e);
  }
}
