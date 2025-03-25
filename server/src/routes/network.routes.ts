import { Router } from "express";
import { NetworkController } from "../controllers/network.controller";

const networkRouter = Router();
const networkController = new NetworkController();

networkRouter.get("/", networkController.getAll);

export default networkRouter;
