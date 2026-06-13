import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaClipboardList,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa"; 
import './TrainerSidebar.css';

function TrainerSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/trainer/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Students",
      path: "/trainer/students",
      icon: <FaUsers />,
    },
    {
      name: "Courses",
      path: "/trainer/courses",
      icon: <FaBook />,
    },
    {
      name: "Assessments",
      path: "/trainer/assessments",
      icon: <FaClipboardList />,
    },
    {
      name: "Reports",
      path: "/trainer/reports",
      icon: <FaChartBar />,
    },
    {
        name:"Profile",
        path:"/trainer/profile",
        icon: <FaUserCircle />
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="trainer-sidebar">

      <div className="sidebar-logo">
        <h2>Trainer Panel</h2>
      </div>

      <ul>

        {menuItems.map((item) => (
          <li
            key={item.path}
            className={
              location.pathname === item.path
                ? "active"
                : ""
            }
          >
            <Link to={item.path}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default TrainerSidebar;