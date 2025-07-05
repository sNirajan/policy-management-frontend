import React, { useState } from "react";
import { type Policy, updatePolicy } from "../api/policies";

interface Props {
  policy: Policy;
  onUpdate: (updated: Policy) => void;
  onCancel: () => void;
}

export const EditPolicyForm: React.FC<Props> = ({ policy, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    policy_number: policy.policy_number,
    customer_number: policy.customer_number,
    premium_amount: policy.premium_amount,
    status: policy.status,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = await updatePolicy(policy.id, formData);
    onUpdate(updated);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h3>Edit Policy</h3>
      <div>
        <label>Policy #:</label>
        <input name="policy_number" value={formData.policy_number} onChange={handleChange} />
      </div>
      <div>
        <label>Customer #:</label>
        <input name="customer_number" value={formData.customer_number} onChange={handleChange} />
      </div>
      <div>
        <label>Premium:</label>
        <input
          name="premium_amount"
          type="number"
          value={formData.premium_amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="cancelled">Cancelled</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <button type="submit">Update</button>{" "}
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};
