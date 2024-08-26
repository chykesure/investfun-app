import React from 'react';
import './roadmap.css';
import roadmapImage from '../images/pool_logo.png'; // Replace with the actual path to your image

function Roadmap() {
    return (
        <div className="roadmap-container">
            <div className="roadmap-image">
                <img src={roadmapImage} alt="Roadmap Character" />
            </div>
            <h1 className="roadmap-title">Roadmap</h1>
            <div className="roadmap-content">
                <ul className="roadmap-list left-list">
                    <li><span className="dot green-dot"></span>Chat for whale holders</li>
                    <li><span className="dot green-dot"></span>Chill with exchanges over a cup of coffee</li>
                    <li><span className="dot red-dot"></span>Ask BlackRock for an ETF</li>
                    <li><span className="dot red-dot"></span>CEX listing</li>
                </ul>
                <ul className="roadmap-list right-list">
                    <li><span className="dot red-dot"></span>Yellow Lamborghini Urus giveaway</li>
                    <li><span className="dot red-dot"></span>Collab with Vitalik Buterin</li>
                    <li><span className="dot red-dot"></span>Fly to Mars with Elon Musk</li>
                    <li><span className="dot red-dot"></span>Collab with Justin Sun</li>
                </ul>
            </div>
        </div>
    );
}

export default Roadmap;
