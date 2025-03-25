import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/:id", authenticate, userController.getUserById);

export default userRouter;
