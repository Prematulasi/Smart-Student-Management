import "./Dashboard.css";
import {
  FaBookOpen,
  FaTasks,
  FaBriefcase,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">
        <div>
          <h1>Welcome Back, Prem 👋</h1>
          <br />
          <p>Track your learning progress and placement journey.</p>
        </div>

        <button className="resume-btn">
          Update Resume
        </button>
      </div>

      {/* Statistics Cards */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="icon course">
            <FaBookOpen />
          </div>

          <div>
            <h2>12</h2>
            <p>Courses Enrolled</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon assignment">
            <FaTasks />
          </div>

          <div>
            <h2>8</h2>
            <p>Assignments</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon jobs">
            <FaBriefcase />
          </div>

          <div>
            <h2>25</h2>
            <p>Available Jobs</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon placement">
            <FaChartLine />
          </div>

          <div>
            <h2>82%</h2>
            <p>Placement Score</p>
          </div>
        </div>

      </div>

      {/* Main Section */}

      <div className="dashboard-content">

        {/* Progress Section */}

        <div className="progress-card">

          <h2>Course Progress</h2>

          <div className="progress-item">
            <span>MERN Stack</span>
            <span>75%</span>
          </div>

          <div className="progress-bar">
            <div style={{ width: "75%" }}></div>
          </div>

          <div className="progress-item">
            <span>Java Full Stack</span>
            <span>90%</span>
          </div>

          <div className="progress-bar">
            <div style={{ width: "90%" }}></div>
          </div>

          <div className="progress-item">
            <span>Data Structures</span>
            <span>65%</span>
          </div>

          <div className="progress-bar">
            <div style={{ width: "65%" }}></div>
          </div>

        </div>

        {/* Placement Readiness */}

        <div className="placement-card">

          <h2>Placement Readiness</h2>

          <div className="circle">
            <h1>82%</h1>
          </div>

          <p>Excellent Progress</p>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="bottom-grid">

        <div className="activity-card">

          <h2>Recent Activities</h2>

          <ul>
            <li>✅ Assignment Submitted</li>
            <li>✅ Applied for Infosys</li>
            <li>✅ Quiz Completed</li>
            <li>✅ Resume Updated</li>
            <li>✅ Java Course Completed</li>
          </ul>

        </div>

        <div className="job-card">

          <h2>Latest Opportunities</h2>

          <div className="job">
            <h4>Software Engineer</h4>
            <p>Infosys • Hyderabad</p>
          </div>

          <div className="job">
            <h4>MERN Developer</h4>
            <p>Accenture • Bangalore</p>
          </div>

          <div className="job">
            <h4>Frontend Developer</h4>
            <p>TCS • Chennai</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;