import { Router } from "express";
import { PairController } from "../controllers/pair.controller";

const pairRouter = Router();
const pairController = new PairController();

pairRouter.get("/:network/:address", pairController.getPair);

export default pairRouter;
