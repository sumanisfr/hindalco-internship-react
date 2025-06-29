// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        // Replace with actual API call
        const userData = { name: "John Doe", email: "john@example.com" };
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Main Dashboard</h2>
        <div className="user-info">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <nav className="dashboard-nav">
        <Link 
          to="/dashboard/overview" 
          className={location.pathname === "/dashboard/overview" ? "active" : ""}
        >
          Overview
        </Link>
        <Link 
          to="/dashboard/profile" 
          className={location.pathname === "/dashboard/profile" ? "active" : ""}
        >
          Profile
        </Link>
        <Link 
          to="/dashboard/settings" 
          className={location.pathname === "/dashboard/settings" ? "active" : ""}
        >
          Settings
        </Link>
      </nav>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
