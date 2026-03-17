# Changelog

All notable changes to the **opsboard-api** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [0.1.1] — 2026-03-17

### Added
- **Auth middleware** (`src/middleware/auth.ts`) — validates `Authorization: Bearer <userId>:<role>` headers
- **Role guard middleware** (`src/middleware/requireRole.ts`) — higher-order function that restricts access by role
- **Admin router** (`src/routes/admin.ts`) with two privileged endpoints:
  - `GET /admin/overview` — returns operational summary (admin only)
  - `POST /admin/projects/:id/archive` — archives a project (admin only)
- `JWT_SECRET` placeholder in `.env.example`
- Ground truth document for Stage 1 (`docs/stage-01-ground-truth.md`)

### Changed
- `GET /projects` now requires authentication (per-route `auth` middleware)
- `/admin` mount uses chained `auth` + `requireRole("admin")` middleware in `app.ts`

### Route access summary
| Endpoint                          | Access   |
|-----------------------------------|----------|
| `GET /health`                     | public   |
| `GET /customers`                  | public   |
| `GET /projects`                   | auth     |
| `GET /admin/overview`             | admin    |
| `POST /admin/projects/:id/archive`| admin    |

---

## [0.1.0] — 2026-03-16

### Added
- Express + TypeScript project skeleton
- App entrypoint (`src/index.ts`) reading `PORT` from environment
- Express app setup (`src/app.ts`) with JSON body parsing
- **Request logging middleware** (`src/middleware/requestLogging.ts`) — logs method, URL, status code, and duration
- **Health route** (`src/routes/health.ts`) — `GET /health`
- **Customers route** (`src/routes/customers.ts`) — `GET /customers`
- **Projects route** (`src/routes/projects.ts`) — `GET /projects`
- `package.json`, `tsconfig.json`, `.env.example`
- Ground truth document for Stage 0 (`docs/stage-00-ground-truth.md`)
