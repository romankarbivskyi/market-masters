import { Router } from "express";
import TraderController from "../controllers/trader.controller";

const traderRouter = Router();
const traderController = new TraderController();

traderRouter.get("/:network/:address", traderController.getTop);

export default traderRouter;
