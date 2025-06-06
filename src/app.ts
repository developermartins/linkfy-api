import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares/middlewares';
import linkRouter from './routes/link.routes';

require('dotenv').config();

const app = express();

app.use(middlewares.arcjetMiddleware);
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/', linkRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
