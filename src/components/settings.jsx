import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', { theme, notifications, language });
    
    // Redirect after saving
    navigate('/dashboard'); // or navigate('/dashboard') or wherever you want to redirect
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      <div className="setting-group">
        <label htmlFor="theme">Theme:</label>
        <select 
          id="theme" 
          value={theme} 
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="setting-group">
        <label htmlFor="notifications">
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <div className="setting-group">
        <label htmlFor="language">Language:</label>
        <select 
          id="language" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <button onClick={handleSave} className="save-button">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;