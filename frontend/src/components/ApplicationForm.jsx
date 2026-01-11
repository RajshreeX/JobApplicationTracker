import { useState } from "react";
import { createApplication } from "../services/api";

const ApplicationForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    source: "",
    status: "Applied",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createApplication(formData);
    setFormData({
      company: "",
      role: "",
      source: "",
      status: "Applied",
      notes: ""
    });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" onChange={handleChange} value={formData.company} required />
      <input name="role" placeholder="Role" onChange={handleChange} value={formData.role} required />
      <input name="source" placeholder="Source" onChange={handleChange} value={formData.source} required />
      <select name="status" onChange={handleChange} value={formData.status}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <textarea name="notes" placeholder="Notes" onChange={handleChange} value={formData.notes}></textarea>
      <button type="submit">Add Application</button>
    </form>
  );
};

export default ApplicationForm;
