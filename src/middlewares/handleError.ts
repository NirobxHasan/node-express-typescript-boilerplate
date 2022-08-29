import { NextFunction, Request, Response } from 'express';
import { GeneralError } from './../utils/error';

export const handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof GeneralError) {
    const code = err.getCode();
    return res.status(code).json({ name: err.name, message: err.message });
  }

  // we dont know any known error if we comne into this point
  return res.status(500).json({
    name: 'Internal Server Error',
    message: err.message,
  });
};
