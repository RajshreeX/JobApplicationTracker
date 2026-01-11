import { deleteApplication, updateApplication } from "../services/api";

const ApplicationItem = ({ application, onChange }) => {

  const handleDelete = async () => {
    if (window.confirm("Delete this application?")) {
      await deleteApplication(application._id);
      onChange();
    }
  };

  const handleStatusChange = async (e) => {
    await updateApplication(application._id, {
      status: e.target.value
    });
    onChange();
  };

  return (
    <li>
      <strong>{application.company}</strong> — {application.role}
      <br />
      <select value={application.status} onChange={handleStatusChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ApplicationItem;
