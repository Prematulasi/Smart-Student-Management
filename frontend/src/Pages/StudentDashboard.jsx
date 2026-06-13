import DashboardLayout from "../Layout/DashboardLayout";
import StatsCards from "../Components/StatsCards";

function StudentDashboard() {
return ( <DashboardLayout title="Student Dashboard">

```
  <StatsCards />

  <div className="dashboard-grid">

    <div className="card">

      <h3>Recent Courses</h3>

      <ul>
        <li>MERN Stack Development</li>
        <li>Java Full Stack</li>
        <li>AWS Cloud Computing</li>
        <li>Data Structures & Algorithms</li>
        <li>React Advanced Concepts</li>
      </ul>

    </div>

    <div className="card">

      <h3>Upcoming Assignments</h3>

      <ul>
        <li>React Project Submission</li>
        <li>MongoDB CRUD Task</li>
        <li>Node.js API Development</li>
        <li>AWS Deployment Task</li>
      </ul>

    </div>

  </div>

  <div
    className="dashboard-grid"
    style={{ marginTop: "20px" }}
  >

    <div className="card">

      <h3>Placement Statistics</h3>

      <h2>85%</h2>

      <p>
        Placement Readiness Score
      </p>

    </div>

    <div className="card">

      <h3>Learning Progress</h3>

      <h2>78%</h2>

      <p>
        Course Completion
      </p>

    </div>

  </div>

</DashboardLayout>


);
}

export default StudentDashboard;
