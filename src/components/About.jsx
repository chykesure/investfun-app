import React from 'react';
import './about.css';
import duckImage from '../images/eye_logo.png';

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={duckImage} alt="IVFun" className="about-image" />
      </div>
      <div className="text-container">
        <h1>About</h1>
        <p>
          <strong>IVFun</strong> — the most entertaining token on the blockchain!
          Backed by fun-lovers and powered by pure joy, it's crypto with a twist.
        </p>
      </div>
    </div>
  );
}

export default About;
