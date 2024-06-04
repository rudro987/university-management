import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

//zod validation middleware

const validatorMiddleWare = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        //validate data before sending to server
        await schema.parseAsync({ body: req.body });
        next();
      } catch (err) {
        next(err);
      }
    };
  };

  export default validatorMiddleWare;