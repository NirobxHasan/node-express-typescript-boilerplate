import { allUser, saveUser } from '@src/services/user.service';
import { NextFunction, Request, Response } from 'express';

export const getAllUser = async (req: Request, res: Response) => {
  const users = await allUser();
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    body.createdAt = Date.now();
    const user = await saveUser(body);
    return res.status(200).json(user);
  } catch (error) {
    // console.log(error);
    next(error);
  }
};
