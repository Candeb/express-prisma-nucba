import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export function createItemValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
    return;
  }

  res.status(400).json({ errors: result.array() });
}
