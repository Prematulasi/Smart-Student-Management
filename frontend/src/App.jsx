
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import TrainerSidebar from "./Components/TrainerSidebar";
import ProtectedRoute from "./Components/ProtectedRoute";

import Dashboard from "./Components/Dashboard";

import Courses from "./Pages/Courses";
import Assignments from "./Pages/Assignments";
import Certificates from "./Pages/Certificates";
import Jobs from "./Pages/Jobs";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CoursePlayer from "./Pages/CoursePlayer";

// Trainer Pages
import TrainerDashboard from "./Pages/Trainer/TrainerDashboard";
import TrainerStudents from "./Pages/Trainer/TrainerStudents";
import TrainerAssessments from "./Pages/Trainer/TrainerAssessments";
import TrainerReports from "./Pages/Trainer/TrainerReports";
import TrainerCourses from "./Pages/Trainer/TrainerCourses";
import TrainerProfile from "./Pages/Trainer/TrainerProfile";

import "./App.css";
import "./Trainer.css";


function AppContent() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setUser(storedUser);
    setIsAuthenticated(
      !!localStorage.getItem("token")
    );
  }, []);

  const handleLogin = (loggedInUser) => {
    setIsAuthenticated(true);
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsAuthenticated(false);
    setUser({});

    navigate("/login");
  };

  return (
    <div className="app-container">

      {/* Role Based Sidebar */}

      {isAuthenticated &&
        (user?.role?.toLowerCase() === "trainer" ? (
          <TrainerSidebar
            onLogout={handleLogout}
          />
        ) : (
          <Sidebar
            onLogout={handleLogout}
          />
        ))}

      <div
        className={
          isAuthenticated
            ? "main-content"
            : "login-content"
        }
      >
        <Routes>

          {/* Login */}

          <Route
            path="/login"
            element={
              isAuthenticated ? (
                user?.role?.toLowerCase() ===
                "trainer" ? (
                  <Navigate to="/trainer/dashboard" />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Login
                  onLogin={handleLogin}
                />
              )
            }
          />

          {/* Register */}

          <Route
            path="/register"
            element={
              isAuthenticated ? (
                user?.role?.toLowerCase() ===
                "trainer" ? (
                  <Navigate to="/trainer/dashboard" />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Register />
              )
            }
          />

          {/* Student Routes */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/course/:id"
            element={
              <ProtectedRoute>
                <CoursePlayer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/assignments"
            element={
              <ProtectedRoute>
                <Assignments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/certificates"
            element={
              <ProtectedRoute>
                <Certificates />
              </ProtectedRoute>
            }
          />

          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <Jobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Trainer Routes */}

          <Route
            path="/trainer/dashboard"
            element={
              <ProtectedRoute>
                <TrainerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trainer/students"
            element={
              <ProtectedRoute>
                <TrainerStudents />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trainer/assessments"
            element={
              <ProtectedRoute>
                <TrainerAssessments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer/courses"
            element={
              <ProtectedRoute>
                <TrainerCourses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/trainer/reports"
            element={
              <ProtectedRoute>
                <TrainerReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer/profile"
            element={
              <ProtectedRoute>
                <TrainerProfile />
              </ProtectedRoute>
            }
          />
          {/* Invalid Route */}

          <Route
            path="*"
            element={
              !isAuthenticated ? (
                <Navigate to="/login" />
              ) : user?.role?.toLowerCase() ===
                "trainer" ? (
                <Navigate to="/trainer/dashboard" />
              ) : (
                <Navigate to="/" />
              )
            }
          />

        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

