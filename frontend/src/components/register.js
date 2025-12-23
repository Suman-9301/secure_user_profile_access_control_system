import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    aadhaar: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const aadhaarRegex = /^\d{12}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Name validation
    if (!form.name) {
      setError("Name is required");
      return;
    }

    // Email validation
    if (!emailRegex.test(form.email)) {
      setError("Invalid email format");
      return;
    }

    // Aadhaar validation
    if (!aadhaarRegex.test(form.aadhaar)) {
      setError("Aadhaar must be exactly 12 digits");
      return;
    }

    // Password validation
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await API.post("/register", form);
      navigate("/");
    } catch {
      setError("Registration failed. Email may already exist.");
    }
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleRegister}>
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="aadhaar"
          placeholder="Aadhaar Number"
          value={form.aadhaar}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
