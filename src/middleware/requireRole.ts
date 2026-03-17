import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./auth";

export function requireRole(role: string) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    if (req.user.role !== role) {
      res.status(403).json({ error: `Requires role: ${role}` });
      return;
    }

    next();
  };
}
