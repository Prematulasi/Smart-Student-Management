import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Services/api";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      const user = response.data.user;
      const token = response.data.token;

      // Save Token
      localStorage.setItem("token", token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      console.log("Logged In User:", user);
      console.log("Role:", user?.role);

      setSuccess(true);
      setLoading(false);

      // Update App State
      if (onLogin) {
        onLogin(user);
      }

      setTimeout(() => {
        // Trainer Login
        if (
          user?.role &&
          user.role.toLowerCase() === "trainer"
        ) {
          navigate("/trainer/dashboard");
        }

        // Student Login
        else {
          navigate("/");
        }
      }, 500);

    } catch (err) {
      console.log("Login Error:", err);

      let message = "Invalid credentials";

      if (err.response) {
        message =
          err.response.data?.message ||
          `${err.response.status} ${err.response.statusText || ""}`;
      } else if (err.request) {
        message =
          "No response from server. Check backend.";
      } else {
        message = err.message;
      }

      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="bg">
      <div className="form-container">
        <h1> 🎓 Smart Student Management </h1>
        <h2>Login</h2>

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        {success && (
          <div className="form-success">
            Login successful! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;