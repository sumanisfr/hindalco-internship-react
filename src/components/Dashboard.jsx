// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { getLoggedInUser, logoutUser, getUserRole } from "../utils/auth";

function Dashboard() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = getUserRole();

  useEffect(() => {
    const user = getLoggedInUser();
    if (user) {
      setLoggedInUser(user);
    } else {
      // Should be handled by ProtectedRoute, but as a fallback:
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  if (!loggedInUser) {
    // This should ideally not be shown if ProtectedRoute works correctly
    return <div className="loading">Loading user data or redirecting...</div>;
  }

  const getNavLinks = () => {
    const commonLinks = [
      { to: "/dashboard/overview", label: "Overview" },
      { to: "/dashboard/profile", label: "Profile" },
      { to: "/dashboard/settings", label: "Settings" },
    ];

    let roleSpecificLinks = [];
    if (userRole === "admin") {
      roleSpecificLinks = [
        { to: "/dashboard/adminDashboard", label: "Admin Panel" },
        // Admin might also have links to view other dashboards if desired
        { to: "/dashboard/managerDashboard", label: "View Manager DB" },
        { to: "/dashboard/userDashboard", label: "View User DB" },
      ];
    } else if (userRole === "manager") {
      roleSpecificLinks = [
        { to: "/dashboard/managerDashboard", label: "Manager Panel" },
      ];
    } else if (userRole === "user") {
      roleSpecificLinks = [
        { to: "/dashboard/userDashboard", label: "User Panel" },
      ];
    }
    return [...commonLinks, ...roleSpecificLinks];
  };

  const navLinks = getNavLinks();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Tool Tracking Dashboard</h2>
        <div className="user-info">
          {/* Display email as name, or enhance user object later */}
          <span>Welcome, {loggedInUser.email} ({userRole})</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <nav className="dashboard-nav">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <main className="dashboard-content">
        <Outlet /> {/* Child routes (Overview, AdminDashboard, etc.) render here */}
      </main>
    </div>
  );
}

export default Dashboard;
