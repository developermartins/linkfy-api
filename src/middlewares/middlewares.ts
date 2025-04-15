import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ErrorResponse from '../interfaces/ErrorResponse';
import aj from '../config/arcjet';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(StatusCodes.NOT_FOUND);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  const statusCode = res.statusCode !== StatusCodes.OK ? res.statusCode : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}

export const arcjetMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) return res.status(StatusCodes.TOO_MANY_REQUESTS).json({ message: "Rate limit exceeded" });
      if (decision.reason.isBot()) return res.status(StatusCodes.FORBIDDEN).json({ message: "Bot detected" });

      return res.status(StatusCodes.FORBIDDEN).json({ message: "Access denied" });
    };

    next();
  } catch (error) {
    console.log(`Arcjet Middleware Error: ${error}`);
    
    next(error);
  };
};