import React from 'react';
import './tokenomics.css';
import investZoneImage from '../images/eye_logo.png';

function Tokenomics() {
    return (
        <div className="tokenomics-container">
            <div className="tokenomics-content">
                <h1 className="tokenomics-title">Tokenomics</h1>
                <p className="tokenomics-detail">Token name: <span>IVfun</span></p>
                <p className="tokenomics-detail">Total supply: 1b</p>
                <p className="tokenomics-detail">Market Cap: 30m$+</p>
                <p className="tokenomics-detail">Holders: 10k+</p>
                <div className="contract-address">
                    <span>CA:</span>
                    <p>TSig7sWzEL2K83mkJMQtbyPpiVSbR6pZnb</p>
                </div>
            </div>
            <div className="tokenomics-image">
                <img src={investZoneImage} alt="Invest Zone" />
            </div>
        </div>
    );
}

export default Tokenomics;
