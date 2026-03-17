import { Request, Response, NextFunction } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export function auth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid authorization header" });
    return;
  }

  const payload = token.replace("Bearer ", "");

  // Fake token format: "<userId>:<role>" e.g. "user-42:admin"
  const parts = payload.split(":");
  if (parts.length !== 2) {
    res.status(401).json({ error: "Malformed token" });
    return;
  }

  req.user = {
    id: parts[0],
    role: parts[1],
  };

  next();
}
