import { Router } from "express";
import NetworkController from "../controllers/network.controller";

const networkRouter = Router();

networkRouter.get("/", NetworkController.getAll);

export default networkRouter;
