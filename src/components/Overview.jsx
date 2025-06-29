// src/components/Overview.jsx
import React, { useState, useEffect } from "react";


const Overview = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    activeProjects: 0,
    pendingTasks: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch overview data
    const fetchOverviewData = async () => {
      try {
        setLoading(true);
        // Replace with actual API call
        const data = {
          totalUsers: 1250,
          totalRevenue: 45600,
          activeProjects: 23,
          pendingTasks: 8
        };
        setStats(data);
      } catch (error) {
        console.error('Error fetching overview data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) {
    return (
      <div className="overview-container">
        <h2>Overview</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.totalUsers.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">${stats.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-number">{stats.activeProjects}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Tasks</h3>
          <p className="stat-number">{stats.pendingTasks}</p>
        </div>
      </div>
      <div className="overview-summary">
        <p>Welcome to your dashboard. Here's a quick overview of your current metrics.</p>
      </div>
    </div>
  );
};

export default Overview;
