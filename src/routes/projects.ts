import { Router } from "express";
import { auth, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

router.get("/", auth, (req: AuthenticatedRequest, res) => {
  res.json([
    { id: "proj-1", name: "Website Redesign", status: "active" },
    { id: "proj-2", name: "Mobile App v2", status: "planning" },
  ]);
});

export default router;
