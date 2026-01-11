import { useEffect, useState } from "react";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import { getApplications } from "../services/api";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const data = await getApplications();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <ApplicationForm onAdd={fetchApplications} />
      <ApplicationList applications={applications} />
    </div>
  );
};

export default Dashboard;
