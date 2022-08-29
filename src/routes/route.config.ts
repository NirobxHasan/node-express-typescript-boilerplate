import { Application } from 'express';
import userRoute from './user';

const routeConfig = (app: Application) => {
  app.use('/users', userRoute);
};

export default routeConfig;
