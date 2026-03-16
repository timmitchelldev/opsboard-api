import express from "express";
import { requestLogging } from "./middleware/requestLogging";
import healthRouter from "./routes/health";
import customersRouter from "./routes/customers";
import projectsRouter from "./routes/projects";

export const app = express();

app.use(express.json());
app.use(requestLogging);

app.use("/health", healthRouter);
app.use("/customers", customersRouter);
app.use("/projects", projectsRouter);
