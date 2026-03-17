export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "member" | "viewer";
  createdAt: string;
}

export const users: User[] = [
  {
    id: "user-1",
    email: "alice@opsboard.io",
    name: "Alice Chen",
    role: "admin",
    createdAt: "2025-08-12T10:00:00Z",
  },
  {
    id: "user-2",
    email: "bob@opsboard.io",
    name: "Bob Martinez",
    role: "member",
    createdAt: "2025-09-03T14:30:00Z",
  },
];
