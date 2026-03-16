# Stage 00 — Ground Truth

Snapshot of the codebase as of Stage 0 completion.
An analyzer inspecting this repo should be able to discover everything below automatically.

---

## App Entrypoint

| File | Description |
|------|-------------|
| `src/index.ts` | Reads `PORT` from `process.env` (default `3000`), imports the app from `src/app.ts`, and calls `app.listen()`. |

## App Construction

| File | Description |
|------|-------------|
| `src/app.ts` | Creates the Express application, registers global middleware, and mounts route modules. |

## Middleware

| Middleware | File | Scope | Description |
|------------|------|-------|-------------|
| `express.json()` | built-in | global | Parses incoming JSON request bodies. |
| `requestLogging` | `src/middleware/requestLogging.ts` | global | Logs `METHOD /path STATUS DURATIONms` on every response via the `res.finish` event. |

## Routes

| Method | Path | Handler file | Response |
|--------|------|-------------|----------|
| GET | `/health` | `src/routes/health.ts` | `{ "status": "ok" }` |
| GET | `/customers` | `src/routes/customers.ts` | `[]` (empty array) |
| GET | `/projects` | `src/routes/projects.ts` | `[]` (empty array) |

## Expected Analyzer Findings

An automated codebase analyzer should be able to detect the following from Stage 0 alone:

### Structure
- **Framework**: Express (via `express` import in `src/app.ts`)
- **Language**: TypeScript (presence of `tsconfig.json`, `.ts` files)
- **Entrypoint**: `src/index.ts` (defined as `main` in `package.json` after build, and as the `dev` / `start` script target)
- **App factory**: `src/app.ts` exports a configured Express instance

### Route discovery
- 3 route modules mounted in `src/app.ts` via `app.use()`
- 3 GET endpoints total (one per route file)
- No parameterized routes, no POST/PUT/PATCH/DELETE handlers
- No route-level middleware

### Middleware discovery
- 2 global middleware registrations in `src/app.ts` (body parser + request logging)
- 0 route-scoped middleware
- Custom middleware count: 1 (`requestLogging`)

### Dependencies (runtime)
- `express`

### Dev dependencies
- `typescript`
- `ts-node`
- `@types/express`
- `@types/node`

### Things intentionally absent (should NOT be detected)
- No database / ORM
- No authentication or authorization
- No environment variable loader (e.g. dotenv) — `process.env` is read directly
- No error-handling middleware
- No tests
- No service layer or models
- No static file serving
- No CORS configuration
- No rate limiting
- No validation library
