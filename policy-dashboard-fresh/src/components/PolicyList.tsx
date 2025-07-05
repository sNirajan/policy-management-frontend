import React, { useEffect, useState } from "react";
import { fetchPolicies, deletePolicy, type Policy } from "../api/policies";
import { EditPolicyForm } from "./EditPolicyForm";


export const PolicyList: React.FC = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPolicy, setEditingPolicy] = useState<Policy | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPolicies()
      .then((data) => {
        setPolicies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this policy?")) return;
    await deletePolicy(id);
    setPolicies(policies.filter((p) => p.id !== id));
  };

  if (loading) return <p>Loading policies...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      {/* <h2>Policies</h2> */}

      {editingPolicy && (
        <EditPolicyForm
          policy={editingPolicy}
          onUpdate={(updated) => {
            setPolicies(policies.map(p => p.id === updated.id ? updated : p));
            setEditingPolicy(null);
          }}
          onCancel={() => setEditingPolicy(null)}
        />
      )}

      <table border={3} cellPadding={8}>
        <thead>
          <tr>
            <th>Policy #</th>
            <th>Customer #</th>
            <th>Premium</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((p) => (
            <tr key={p.id}>
              <td>{p.policy_number}</td>
              <td>{p.customer_number}</td>
              <td>{p.premium_amount}</td>
              <td>{p.status}</td>
              <td>
                <button onClick={() => setEditingPolicy(p)}>Edit</button>{""}
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};
