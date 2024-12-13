import React, { useState, useEffect } from 'react';
import { HeaderData } from '../../types/resume';
import './Header.css';

const Header: React.FC<HeaderData> = React.memo(({ name, taglines, profileImage, contact }) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedTagline, setDisplayedTagline] = useState(taglines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setDisplayedTagline(taglines[(currentTaglineIndex + 1) % taglines.length]);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTaglineIndex, taglines]);

  return (
    <header className="header">
      <div className="profile-section">
        <img src={profileImage} alt={name} className="profile-image" />
        <div className="profile-info">
          <h1>{name}</h1>
          <div className="tagline-container">
            <h2 className={`animated-tagline ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <span className="text-blue-500 font-medium mr-1">{displayedTagline.prepend}</span>
              <span>{displayedTagline.text}</span>
            </h2>
          </div>
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
