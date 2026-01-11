import { useEffect, useState } from "react";
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import { getApplications } from "../services/api";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchApplications = async () => {
    const data = await getApplications();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

    //Filter logic
  const filteredApplications =
    filterStatus === "All"
      ? applications
      : applications.filter(app => app.status === filterStatus);

  return (
    <div>
        <h1>Job Application Tracker</h1>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
        </select>

        <ApplicationForm onAdd={fetchApplications} />
        <ApplicationList applications={filteredApplications} onChange={fetchApplications}/>
    
    </div>
  );
};

export default Dashboard;
