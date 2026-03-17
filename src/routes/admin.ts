import { Router } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { customers } from "../models/Customer";
import { projects } from "../models/Project";
import { invoices } from "../models/Invoice";

const router = Router();

router.get("/overview", (req: AuthenticatedRequest, res) => {
  res.json({
    totalCustomers: customers.length,
    activeProjects: projects.filter((p) => p.status === "active").length,
    pendingInvoices: invoices.filter((i) => i.status === "sent" || i.status === "draft").length,
    requestedBy: req.user?.id,
  });
});

router.post("/projects/:id/archive", (req: AuthenticatedRequest, res) => {
  const project = projects.find((p) => p.id === req.params.id);

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  project.status = "archived";

  res.json({
    message: `Project ${project.id} archived`,
    project,
    archivedBy: req.user?.id,
  });
});

export default router;
