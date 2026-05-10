import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

export class AppError extends Error implements ApiError {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const errorHandler = (
  error: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = (error as ApiError).statusCode || 500;
  const message = error.message || 'Internal Server Error';

  console.error(`❌ [${statusCode}] ${message}`, {
    path: req.path,
    method: req.method,
    error: error instanceof Error ? error.message : error,
    ...(env.NODE_ENV === 'development' && { stack: error instanceof Error ? error.stack : undefined }),
  });

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    ...(env.NODE_ENV === 'development' && { error: error instanceof Error ? error : undefined }),
  });
};

export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
