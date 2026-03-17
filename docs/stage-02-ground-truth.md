# Stage 02 Ground Truth — Models and Business Entities

## Routes

| Method | Path                         | Auth   | Role  | Entity references          |
|--------|------------------------------|--------|-------|----------------------------|
| GET    | /health                      | public | —     | —                          |
| GET    | /customers                   | public | —     | Customer                   |
| POST   | /customers                   | public | —     | Customer (create)          |
| GET    | /projects                    | auth   | any   | Project                    |
| GET    | /projects/:id                | auth   | any   | Project                    |
| GET    | /invoices                    | auth   | any   | Invoice                    |
| POST   | /invoices                    | auth   | any   | Invoice (create), Customer, Project |
| GET    | /admin/overview              | auth   | admin | Customer, Project, Invoice |
| POST   | /admin/projects/:id/archive  | auth   | admin | Project (update)           |

## Middleware
- requestLogging — global
- auth — per-route or per-mount
- requireRole("admin") — mounted on /admin

## Models

| Entity   | File                    | Fields                                                  |
|----------|-------------------------|---------------------------------------------------------|
| User     | src/models/User.ts      | id, email, name, role, createdAt                        |
| Customer | src/models/Customer.ts  | id, name, email, company, status, createdAt             |
| Project  | src/models/Project.ts   | id, name, customerId, status, createdAt                 |
| Invoice  | src/models/Invoice.ts   | id, customerId, projectId, amountCents, currency, status, issuedAt |

## Entity Relationships
- Project.customerId → Customer.id
- Invoice.customerId → Customer.id
- Invoice.projectId → Project.id

## In-Memory Data
- 2 users (seeded)
- 3 customers (seeded, with createCustomer helper)
- 3 projects (seeded)
- 2 invoices (seeded, with createInvoice helper)

## Services
None yet.

## Jobs
None yet.

## Integrations
None yet.

## Environment Variables
- `PORT` — server port (default 3000)
- `JWT_SECRET` — placeholder

## Expected Analyzer Findings
- Detect 4 model/entity files (User, Customer, Project, Invoice)
- Identify entity relationships via shared ID fields (customerId, projectId)
- Detect 9 route endpoints across 5 route files
- Recognize CRUD patterns: list, get-by-id, create
- Identify Invoice creation as a cross-entity operation (validates Customer + Project)
- Admin overview aggregates across Customer, Project, Invoice models
- Admin archive mutates Project status
- User model exists but is not yet referenced from routes
- Do not claim database, ORM, service layer, jobs, or webhooks exist
