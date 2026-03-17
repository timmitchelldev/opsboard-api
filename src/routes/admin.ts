import { Router } from "express";
import { AuthenticatedRequest } from "../middleware/auth";

const router = Router();

router.get("/overview", (req: AuthenticatedRequest, res) => {
  res.json({
    totalCustomers: 84,
    activeProjects: 23,
    pendingInvoices: 7,
    requestedBy: req.user?.id,
  });
});

router.post("/projects/:id/archive", (req: AuthenticatedRequest, res) => {
  const { id } = req.params;

  res.json({
    message: `Project ${id} archived`,
    archivedBy: req.user?.id,
  });
});

export default router;
