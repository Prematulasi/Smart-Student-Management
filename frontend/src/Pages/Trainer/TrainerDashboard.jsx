import { FaUsers, FaBook, FaClipboardList, FaChartBar } from "react-icons/fa";

function TrainerDashboard() {
  return (
    <div className="trainer-dashboard">

      <h1>Trainer Dashboard</h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <FaUsers size={30} />
          <h2>120</h2>
          <p>Total Students</p>
        </div>

        <div className="dashboard-card">
          <FaBook size={30} />
          <h2>8</h2>
          <p>Courses</p>
        </div>

        <div className="dashboard-card">
          <FaClipboardList size={30} />
          <h2>25</h2>
          <p>Assessments</p>
        </div>

        <div className="dashboard-card">
          <FaChartBar size={30} />
          <h2>14</h2>
          <p>Pending Reviews</p>
        </div>

      </div>

    </div>
  );
}

export default TrainerDashboard;