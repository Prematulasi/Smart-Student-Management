import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Services/api";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await API.post("/auth/register", formData);

      setSuccess("Registration successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 900);

      console.log(response.data);

    } catch (err) {
      console.log(err);
      let message = "Registration failed";
      if (err.response) {
        message = err.response.data?.message || `${err.response.status} ${err.response.statusText || ""}`;
      } else if (err.request) {
        message = "No response from server. Check backend.";
      } else {
        message = err.message;
      }
      setError(message);
    }
  };

  return (
    <div className="bg">
    <div className="form-container">
     <h1>🎓 Smart Student Management </h1>
     <br />
      <h2>Register</h2>

      {error && <div className="form-error">{error}</div>}
      {success && <div className="form-success">{success}</div>}

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Trainer">Trainer</option>
          </select>
        </div>

        <button type="submit" className="btn">
          Register
        </button>

      </form>

      <p>
        Already Registered?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

    </div>
    </div>
  );
}

export default Register;