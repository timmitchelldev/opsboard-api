import { Router } from "express";
import { auth, AuthenticatedRequest } from "../middleware/auth";
import { invoices, createInvoice } from "../models/Invoice";
import { customers } from "../models/Customer";
import { projects } from "../models/Project";

const router = Router();

router.get("/", auth, (req: AuthenticatedRequest, res) => {
  res.json(invoices);
});

router.post("/", auth, (req: AuthenticatedRequest, res) => {
  const { customerId, projectId, amountCents, currency } = req.body;

  if (!customerId || !projectId || !amountCents) {
    res.status(400).json({ error: "customerId, projectId, and amountCents are required" });
    return;
  }

  const customer = customers.find((c) => c.id === customerId);
  if (!customer) {
    res.status(404).json({ error: "Customer not found" });
    return;
  }

  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  const invoice = createInvoice({
    customerId,
    projectId,
    amountCents,
    currency: currency || "USD",
  });

  res.status(201).json(invoice);
});

export default router;
