import {
  FaBars,
  FaBell,
} from "react-icons/fa";

function Topbar({
  title,
  setSidebarOpen,
}) {

  return (
    <div className="topbar">

      <div className="top-left">

        <button
          className="menu-btn"
          onClick={() =>
            setSidebarOpen(
              prev => !prev
            )
          }
        >
          <FaBars />
        </button>

        <h2>{title}</h2>

      </div>

      <div className="top-right">

        <FaBell />

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="avatar"
        />

      </div>

    </div>
  );
}

export default Topbar;