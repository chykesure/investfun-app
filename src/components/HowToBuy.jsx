import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './howtobuy.css';

function HowToBuy() {
  return (
    <div className="how-to-buy-container">
      <h1 className="heading">How to buy</h1>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-description">
            Download <a href="https://www.tronlink.org" target="_blank" rel="noopener noreferrer" className="step-action">TronLink Wallet</a> (Android, iOS, Chrome)
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-description">
            Deposit Tron ($TRX) to the wallet from any DEX exchanges
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-description">
            Go to <a href="https://sunpump.meme" target="_blank" rel="noopener noreferrer" className="step-action">Sunpump.meme</a> or <a href="https://sun.io" target="_blank" rel="noopener noreferrer" className="step-action">Sun.io</a>, set the Slippage tolerance to 1% and buy token
          </div>
        </div>
      </div>
      <div className="important-note">
        <FaInfoCircle className="note-icon" />
        <span>
          IMPORTANT: YOU MUST LEAVE A MINIMUM 10-15 TRX ($2) IN YOUR WALLET BALANCE TO PAY COMMISSIONS ON THE NETWORK.
        </span>
      </div>
    </div>
  );
}

export default HowToBuy;
