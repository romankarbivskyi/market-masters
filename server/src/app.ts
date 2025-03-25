import express from "express";
import cors from "cors";
import helmet from "helmet";
import traderRoutes from "./routes/trader.routes";
import networkRoutes from "./routes/network.routes";
import pairRoutes from "./routes/pair.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { PORT } from "./configs/env";
import passport from "passport";
import { configurePassport } from "./auth/passport";

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
configurePassport();

app.use("/api/traders", traderRoutes);
app.use("/api/networks", networkRoutes);
app.use("/api/pairs", pairRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`API Listening on http://localhost:${PORT}/api`)
);
