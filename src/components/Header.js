import React from 'react';
import logo from '../images/logo.png'; 
import imageRight from '../images/OIP.png'; 
import linkedImage1 from '../images/008-github.png'; 
import linkedImage2 from '../images/010-linkedin.png'; 
import '../styles/Header.css'; 



function Header() {
  const githubProfileUrl = 'https://github.com/NurdPlay';

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="linked-images">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
            <img src={linkedImage1} alt="GitHub Logo" />
          </a>
          <a href="#linkedin">
            <img src={linkedImage2} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
      <div className="header-right">
        <img src={imageRight} alt="Portrait" />
      </div>
    </header>
  );
}

export default Header;
