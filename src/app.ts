import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

export const app: Express = express();

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(cors());
app.options('*', cors());
