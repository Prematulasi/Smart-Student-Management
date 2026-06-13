import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

function AdminDashboard() {

  return (

    <div className="container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="cards">

          <div className="card">
            <h3>
              Students
            </h3>

            <p>
              500
            </p>
          </div>

          <div className="card">
            <h3>
              Trainers
            </h3>

            <p>
              25
            </p>
          </div>

          <div className="card">
            <h3>
              Courses
            </h3>

            <p>
              30
            </p>
          </div>

          <div className="card">
            <h3>
              Jobs
            </h3>

            <p>
              45
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;