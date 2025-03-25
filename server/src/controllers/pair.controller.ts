import { DextoolsService } from "../services/dextools.service";
import { Request, Response, NextFunction } from "express";

export class PairController {
  private dextoolsService: DextoolsService;

  constructor() {
    this.dextoolsService = new DextoolsService();
  }

  getPair = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { network, address } = req.params;

      const pair = await this.dextoolsService.getPair(network, address);

      res.status(200).json({ data: pair, success: true });
    } catch (err) {
      next(err);
    }
  };
}
