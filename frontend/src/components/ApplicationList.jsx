import ApplicationItem from "./ApplicationItem";

const ApplicationList = ({ applications }) => {
  if (!applications.length) return <p>No applications found.</p>;

  return (
    <ul>
      {applications.map((app) => (
        <ApplicationItem key={app._id} application={app} />
      ))}
    </ul>
  );
};

export default ApplicationList;
