export interface Invoice {
  id: string;
  customerId: string;
  projectId: string;
  amountCents: number;
  currency: string;
  status: "draft" | "sent" | "paid" | "overdue";
  issuedAt: string;
}

let nextId = 3;

export const invoices: Invoice[] = [
  {
    id: "inv-1",
    customerId: "cust-1",
    projectId: "proj-1",
    amountCents: 450000,
    currency: "USD",
    status: "paid",
    issuedAt: "2025-09-01T00:00:00Z",
  },
  {
    id: "inv-2",
    customerId: "cust-2",
    projectId: "proj-3",
    amountCents: 120000,
    currency: "USD",
    status: "sent",
    issuedAt: "2025-11-15T00:00:00Z",
  },
];

export function createInvoice(
  data: Omit<Invoice, "id" | "issuedAt" | "status">
): Invoice {
  const invoice: Invoice = {
    ...data,
    id: `inv-${nextId++}`,
    status: "draft",
    issuedAt: new Date().toISOString(),
  };
  invoices.push(invoice);
  return invoice;
}
