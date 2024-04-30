import express, { Request, Response, Router } from 'express';

export const index: Router = express.Router();

index.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
