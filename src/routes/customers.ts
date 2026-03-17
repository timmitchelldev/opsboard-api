import { Router } from "express";
import { customers, createCustomer } from "../models/Customer";

const router = Router();

router.get("/", (_req, res) => {
  res.json(customers);
});

router.post("/", (req, res) => {
  const { name, email, company, status } = req.body;

  if (!name || !email || !company) {
    res.status(400).json({ error: "name, email, and company are required" });
    return;
  }

  const customer = createCustomer({
    name,
    email,
    company,
    status: status || "active",
  });

  res.status(201).json(customer);
});

export default router;
