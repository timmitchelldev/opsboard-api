export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "active" | "churned" | "trial";
  createdAt: string;
}

let nextId = 4;

export const customers: Customer[] = [
  {
    id: "cust-1",
    name: "Jenna Park",
    email: "jenna@acmecorp.com",
    company: "Acme Corp",
    status: "active",
    createdAt: "2025-06-01T09:00:00Z",
  },
  {
    id: "cust-2",
    name: "Marcus Liu",
    email: "marcus@globex.io",
    company: "Globex Inc",
    status: "active",
    createdAt: "2025-07-15T11:00:00Z",
  },
  {
    id: "cust-3",
    name: "Sara Okoye",
    email: "sara@initech.co",
    company: "Initech",
    status: "trial",
    createdAt: "2025-11-20T16:00:00Z",
  },
];

export function createCustomer(data: Omit<Customer, "id" | "createdAt">): Customer {
  const customer: Customer = {
    ...data,
    id: `cust-${nextId++}`,
    createdAt: new Date().toISOString(),
  };
  customers.push(customer);
  return customer;
}
