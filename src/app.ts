import express from "express";
import { requestLogging } from "./middleware/requestLogging";
import { auth } from "./middleware/auth";
import { requireRole } from "./middleware/requireRole";
import healthRouter from "./routes/health";
import customersRouter from "./routes/customers";
import projectsRouter from "./routes/projects";
import adminRouter from "./routes/admin";

export const app = express();

app.use(express.json());
app.use(requestLogging);

app.use("/health", healthRouter);
app.use("/customers", customersRouter);
app.use("/projects", projectsRouter);
app.use("/admin", auth, requireRole("admin"), adminRouter);
