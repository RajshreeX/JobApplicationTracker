const ApplicationItem = ({ application }) => {
  return (
    <li>
      <strong>{application.company}</strong> — {application.role}  
      <br />
      Status: {application.status} | Source: {application.source}
    </li>
  );
};

export default ApplicationItem;
