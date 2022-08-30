import { BadRequest } from '@src/utils/error';
import { NextFunction, Request, Response } from 'express';

interface Ivaidate {
  error?: any;
  value: object;
}

const handleValidations = (validate:Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = validate(req.body);
    const isValid = result.error == null;
    if (isValid) {
      return next();
    }
    const { details } = result.error;
    const message = details.map((e: any) => e.message);
    const msg = message.join(',');
    throw new BadRequest(msg);
  };
};

export default handleValidations;
