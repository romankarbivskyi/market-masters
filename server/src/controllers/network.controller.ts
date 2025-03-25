import { Request, Response } from "express";
import networks from "../configs/networks";

export class NetworkController {
  getAll(req: Request, res: Response) {
    res.status(200).json({ data: networks, success: true });
  }
}
