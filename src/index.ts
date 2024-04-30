import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

import { config } from './config/config';

const app: Express = express();
const port = config.env || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
