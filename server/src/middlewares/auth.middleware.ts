import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { ApiError } from "../helpers/api-error";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: any, user: any, info: any) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        throw ApiError.Unauthorized("Unauthorized");
      }

      req.user = user;
      next();
    }
  )(req, res, next);
};
