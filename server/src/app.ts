import express from "express";
import cors from "cors";
import helmet from "helmet";
import traderRouter from "./routes/trader.routes";
import networkRouter from "./routes/network.routes";
import pairRouter from "./routes/pair.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { PORT } from "./configs/env";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/traders", traderRouter);
app.use("/api/networks", networkRouter);
app.use("/api/pairs", pairRouter);

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`API Listening on http://localhost:${PORT}/api`)
);
