import { Request, Response, NextFunction } from 'express';

function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.json({
    error: err.message,
  });
}

export default errorMiddleware;
