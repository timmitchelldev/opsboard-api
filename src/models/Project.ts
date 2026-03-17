export interface Project {
  id: string;
  name: string;
  customerId: string;
  status: "planning" | "active" | "paused" | "archived";
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Website Redesign",
    customerId: "cust-1",
    status: "active",
    createdAt: "2025-07-01T08:00:00Z",
  },
  {
    id: "proj-2",
    name: "Mobile App v2",
    customerId: "cust-1",
    status: "planning",
    createdAt: "2025-10-10T12:00:00Z",
  },
  {
    id: "proj-3",
    name: "Data Pipeline",
    customerId: "cust-2",
    status: "active",
    createdAt: "2025-08-22T09:30:00Z",
  },
];
