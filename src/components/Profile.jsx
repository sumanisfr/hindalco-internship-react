import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img 
          src="" 
          alt="Profile" 
          className="profile-avatar"
        />
        <h2>John Doe</h2>
        <p className="profile-title">Software Developer</p>
      </div>
      
      <div className="profile-info">
        <div className="info-item">
          <strong>Email:</strong>
          <span>john.doe@example.com</span>
        </div>
        <div className="info-item">
          <strong>Location:</strong>
          <span>New York, NY</span>
        </div>
        <div className="info-item">
          <strong>Joined:</strong>
          <span>January 2023</span>
        </div>
      </div>
      
      <div className="profile-bio">
        <h3>About</h3>
        <p>
          Passionate software developer with experience in React, Node.js, and modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Profile;