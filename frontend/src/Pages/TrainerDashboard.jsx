import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

function TrainerDashboard() {

  return (

    <div className="container">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="cards">

          <div className="card">
            <h3>
              Courses
            </h3>

            <p>
              8
            </p>
          </div>

          <div className="card">
            <h3>
              Students
            </h3>

            <p>
              150
            </p>
          </div>

          <div className="card">
            <h3>
              Assignments
            </h3>

            <p>
              24
            </p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default TrainerDashboard;