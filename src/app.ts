import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';

import { index } from './routes';

export const app: Express = express();

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// v1 api routes
app.use('/v1', index);

app.use(cors());
app.options('*', cors());
