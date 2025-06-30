import React, { useEffect, useState } from 'react';
import { getLoggedInUser } from '../utils/auth';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getLoggedInUser());
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  // Placeholder for avatar image - ideally, this would come from user data
  const avatarImageUrl = `https://ui-avatars.com/api/?name=${user.email.split('@')[0]}&background=random&size=128`;


  return (
    <div className="profile" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <div className="profile-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={avatarImageUrl}
          alt="Profile Avatar"
          className="profile-avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
        />
        <h2>{user.email.split('@')[0]}</h2> {/* Display part of email as name */}
        <p className="profile-title">Role: {user.role}</p>
      </div>
      
      <div className="profile-info">
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Email:</strong>
          <span style={{ marginLeft: '10px' }}>{user.email}</span>
        </div>
        <div className="info-item" style={{ marginBottom: '10px' }}>
          <strong>Location:</strong>
          <span style={{ marginLeft: '10px' }}>Not Specified</span> {/* Placeholder */}
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