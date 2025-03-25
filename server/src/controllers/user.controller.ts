import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user = await this.userService.getUserById(id);

      res.status(200).json({ data: user, success: true });
    } catch (err) {
      next(err);
    }
  };
}
