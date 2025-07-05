export interface Policy {
  id: number;
  policy_number: string;
  customer_number: string;
  premium_amount: number;
  status: string;
  created_at: string;
  updated_at: string;
}

const BASE_URL = "http://127.0.0.1:8000/api/policies"; // Laravel runs at this path

export async function fetchPolicies(): Promise<Policy[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch policies");
  return res.json();
}

export async function createPolicy(data: Omit<Policy, "id" | "created_at" | "updated_at">): Promise<Policy> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create policy");
  return res.json();
}

export async function deletePolicy(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete policy");
}

export async function updatePolicy(
  id: number,
  data: Partial<Omit<Policy, "id" | "created_at" | "updated_at">>): Promise<Policy> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update policy");
  return res.json();
}
