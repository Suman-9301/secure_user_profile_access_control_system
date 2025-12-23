import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/profile")
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/");
      });
  }, [navigate]);

  if (!user) return <p className="loading">Loading...</p>;

  return (
    <div className="container">
      <div className="card">
        <h2>Profile Dashboard</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Aadhaar:</b> {user.aadhaar}</p>
        <button onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
