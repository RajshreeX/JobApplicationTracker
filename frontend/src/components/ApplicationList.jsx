import ApplicationItem from "./ApplicationItem";

const ApplicationList = ({ applications, onChange }) => {
  if (!applications.length) return <p>No applications found.</p>;

  return (
    <ul>
      {applications.map((app) => (
        <ApplicationItem
          key={app._id}
          application={app}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};

export default ApplicationList;
