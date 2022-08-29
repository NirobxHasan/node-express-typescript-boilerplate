import cors from 'cors';
import dotevn from 'dotenv-safe';
import 'dotenv/config';
import express, { Application, NextFunction, Request, Response } from 'express';
import { connectWithDb } from './../mongo.config';
import { handleError } from './middlewares/handleError';
import routeConfig from './routes/route.config';
import { NotFound } from './utils/error';
// Implement later
// const swaggerUI = require('swagger-ui-express');

dotevn.config();
const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());

//Database Connections
connectWithDb();

//Route
routeConfig(app);

// Error handling Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  throw new NotFound('Requested url was not found!');
});

app.use(handleError);



app.get('/', (req, res) => {
  res.send(`I am here aa ${process.env.DATABASE_URL}`);
});

export default app;