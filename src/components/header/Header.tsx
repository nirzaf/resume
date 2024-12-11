import React from 'react';
import { HeaderData } from '../../types/resume';

const Header: React.FC<HeaderData> = React.memo(({ name, title, profileImage, contact }) => {
  return (
    <header className="header">
      <div className="profile-section">
        <img src={profileImage} alt={name} className="profile-image" />
        <div className="profile-info">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="contact-info">
        <div><i className="fas fa-envelope"></i> {contact.email}</div>
        <div><i className="fas fa-phone"></i> {contact.mobile}</div>
        <div><i className="fas fa-map-marker-alt"></i> {contact.location}</div>
        <div><i className="fab fa-linkedin"></i> <a href={contact.linkedin}>LinkedIn</a></div>
        <div><i className="fab fa-github"></i> <a href={contact.github}>GitHub</a></div>
        <div><i className="fas fa-globe"></i> <a href={contact.portfolio}>Portfolio</a></div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
