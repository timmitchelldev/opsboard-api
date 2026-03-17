# Stage 01 Ground Truth — Auth and Admin Surface

## Routes

| Method | Path                        | Auth       | Role  |
|--------|-----------------------------|------------|-------|
| GET    | /health                     | public     | —     |
| GET    | /customers                  | public     | —     |
| GET    | /projects                   | auth       | any   |
| GET    | /admin/overview             | auth       | admin |
| POST   | /admin/projects/:id/archive | auth       | admin |

## Middleware

| Name           | Type            | Scope                          |
|----------------|-----------------|--------------------------------|
| requestLogging | logging         | global (all routes)            |
| auth           | authentication  | per-route or per-mount         |
| requireRole    | authorization   | mounted on /admin (role=admin) |

## Auth Details
- Token format: `Bearer <userId>:<role>` (fake, header-based)
- Auth middleware reads `Authorization` header
- `requireRole` is a higher-order function that returns middleware

## Models
None yet.

## Services
None yet.

## Jobs
None yet.

## Integrations
None yet.

## Environment Variables
- `PORT` — server port (default 3000)
- `JWT_SECRET` — placeholder for future token signing

## Expected Analyzer Findings
- Detect Express app with 5 endpoints
- Detect 3 middleware (requestLogging, auth, requireRole)
- Identify auth middleware as authentication layer
- Identify requireRole as authorization/role guard
- Flag /admin/* routes as privileged/protected
- Recognize /health and /customers as public
- Recognize /projects as authenticated
- Detect higher-order middleware pattern in requireRole
- Do not claim database, jobs, webhooks, or service layer exist
