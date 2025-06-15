import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import agentRouter from "./routes/agentRoutes/agentRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", agentRouter);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT:${process.env.PORT}`);
});
