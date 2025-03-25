import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { User } from "@prisma/client";
import { ApiError } from "../helpers/api-error";

export class AuthController {
  private authService: AuthService = new AuthService();

  useGoogleAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = await this.authService.getGoogleAuthUrl();
      res.redirect(url);
    } catch (err) {
      next(err);
    }
  };

  handleGoogleCallback = (req: Request, res: Response) => {
    try {
      const user = req.user as
        | Omit<User, "password" | "verifyToken">
        | undefined;

      if (!user) {
        return res.redirect(
          `${process.env.CLIENT_URL}/login?error=Authentication failed`
        );
      }

      const token = this.authService.generateToken(user);

      res.redirect(
        `${process.env.CLIENT_URL}/auth/callback?token=${token}&user_id=${user.id}`
      );
    } catch (error) {
      console.error("Google callback error:", error);
      res.redirect(
        `${process.env.CLIENT_URL}/login?error=Authentication failed`
      );
    }
  };

  me = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user as User | undefined;

      if (!user) {
        throw ApiError.Unauthorized("User not found");
      }

      res.status(200).json({
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          role: user.role,
          plan: user.plan,
          expiresAt: user.expiresAt,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const data = await this.authService.registerUser(name, email, password);
      res.status(201).json({ success: true, data: data });
    } catch (err) {
      next(err);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const data = await this.authService.loginUser(email, password);
      res.status(200).json({ success: true, data: data });
    } catch (err) {
      next(err);
    }
  };
}
