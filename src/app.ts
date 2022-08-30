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

app.get('/', (req, res) => {
  res.send(`A boilerplate for building production-ready RESTful APIs using Node.js, Express, and Mongoose`);
});

// Error handling Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  throw new NotFound('Requested url was not found!');
});

app.use(handleError);
export default app;
