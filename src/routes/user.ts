import { createUser, getAllUser } from '@src/controllers/user';
import handleValidations from '@src/middlewares/handleValidations';
import validators from '@src/validations';
import express from 'express';

const userRoute = express.Router();

userRoute.get('/', getAllUser);
userRoute.post('/', handleValidations(validators.userShemaValidator), createUser);

export default userRoute;
