import { Router } from "express";
import { auth, AuthenticatedRequest } from "../middleware/auth";
import { projects } from "../models/Project";

const router = Router();

router.get("/", auth, (req: AuthenticatedRequest, res) => {
  res.json(projects);
});

router.get("/:id", auth, (req: AuthenticatedRequest, res) => {
  const project = projects.find((p) => p.id === req.params.id);

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  res.json(project);
});

export default router;
