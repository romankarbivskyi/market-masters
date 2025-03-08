import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/api-error";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.log(err);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message, success: false });
    return;
  }

  res.status(500).json({ error: "Internal Server Error", success: false });
};
