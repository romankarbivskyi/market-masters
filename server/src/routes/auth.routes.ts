import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import passport from "passport";
import { CLIENT_URL } from "../configs/env";

const authRouter = Router();
const authController = new AuthController();

authRouter.get("/google", authController.useGoogleAuth);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${CLIENT_URL}/auth/login?error=Authentication failed`,
  }),
  authController.handleGoogleCallback
);
authRouter.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  authController.me
);
authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);

export default authRouter;
