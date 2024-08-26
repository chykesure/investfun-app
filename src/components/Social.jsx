import React from 'react';
import './social.css';
import x from '../images/socials/x.svg';
import instagram from '../images/socials/instagram.svg';
import gdrive from '../images/socials/g-drive.svg';
import telegram from '../images/socials/telegram.svg';
import youtube from '../images/socials/youtube.svg';

function Social() {
  return (
    <div className="nsocial-container">
      <h1 className="nsocial-title">Socials</h1>
      <div className="nsocial-icons">
        <img src={x} alt="X" className="nsocial-icon" />
        <img src={instagram} alt="Instagram" className="nsocial-icon" />
        <img src={gdrive} alt="Google Drive" className="nsocial-icon" />
        <img src={telegram} alt="Telegram" className="nsocial-icon" />
        <img src={youtube} alt="YouTube" className="nsocial-icon" />
      </div>
    </div>
  );
}

export default Social;
