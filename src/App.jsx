import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./components/Dashboard";
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import Overview from './components/Overview';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
// Assuming settings.jsx will be renamed to Settings.jsx and imported as Settings
import Settings from './components/Settings'; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route element={<ProtectedRoute />}> {/* General protection for all dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            {/* Role-specific routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="adminDashboard" element={<AdminDashboard />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
              {/* Assuming admin can also see user dashboard for example */}
              {/* Or make it just ['user'] if strictly for users */}
              <Route path="userDashboard" element={<UserDashboard />} />
            </Route>
            <Route element={<ProtectedRoute allowedRoles={['manager', 'admin']} />}>
              {/* Assuming admin can also see manager dashboard */}
              {/* Or make it just ['manager'] */}
              <Route path="managerDashboard" element={<ManagerDashboard />} />
            </Route>
            {/* Profile and Settings accessible to all authenticated users */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
