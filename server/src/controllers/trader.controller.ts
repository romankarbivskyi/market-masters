import { Request, Response, NextFunction } from "express";
import networks from "../configs/networks";
import { DextoolsService } from "../services/dextools.service";

class TraderController {
  private dextoolsService: DextoolsService;

  constructor() {
    this.dextoolsService = new DextoolsService();
  }

  getTop = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { network, address } = req.params;

      const traders = await this.dextoolsService.getTopTraders(network, address);

      const networkConfig = networks.find((n) => n.id === network);

      res.status(200).json({ data: {traders, network: networkConfig}, success: true });
    } catch (err) {
      next(err);
    }
  };
}

export default TraderController;
