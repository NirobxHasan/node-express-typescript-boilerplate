import { createUser, getAllUser } from '@src/controllers/user';
import express from 'express';

const userRoute = express.Router();

userRoute.get('/', getAllUser);
userRoute.post('/', createUser);

export default userRoute;
