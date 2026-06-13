import {
  FaHome,
  FaBookOpen,
  FaTasks,
  FaBriefcase,
  FaChartLine,
  FaCertificate,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";


function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>SmartLMS</h2>
      </div>

      <div className="profile">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
        />
        <h3>Prema Tulasi</h3>
        <p>Student</p>
      </div>

      <ul className="menu">
        <li className="active">
          <FaHome /> Dashboard
        </li>
        <li>
           <NavLink to="/courses" className="nav-link">
            <FaBookOpen />
            <span>My Courses</span>
            </NavLink>
       </li>
        <li>
        <NavLink to="/assignments" className="nav-link">
         <FaTasks />
          Assignments
          </NavLink>

          </li> 
         <li>
        <NavLink to="/certificates" className="nav-link">
         <FaTasks />
          Certificates
          </NavLink>
          
          </li> 

        <li>
          <NavLink to="/jobs" className="nav-link">
          <FaBriefcase /> Job Opportunities
          </NavLink>
        </li>
       
        <li>
          <NavLink to="/settings" className="nav-link">
          <FaCog /> Settings
          </NavLink>
        </li>
         <li>
          <NavLink to="/profile" className="nav-link">
          <FaBell /> Profile
          </NavLink>
        </li>

        <li className="logout" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;