import React from 'react';
import './homepage.css';
import backgroundVideo from '../images/background.mp4'; // Make sure to provide the correct path to your video file
import profileImg from '../images/lohgo.png';
import warriorImg from '../images/pool_logo.png';
import tronscan from '../images/tronscan.svg';
import sunswap from '../images/sunswap.svg';
import dextools from '../images/dextools.svg';
import dexscreener from '../images/dexscreener.svg';
import cmc from '../images/cmc.svg';
import symbiosis from '../images/symbiosis.svg';
import x from '../images/socials/x.svg';
import instagram from '../images/socials/instagram.svg';
import gdrive from '../images/socials/g-drive.svg';
import telegram from '../images/socials/telegram.svg';
import youtube from '../images/socials/youtube.svg';

function HomePage() {
    return (
        <div className="homepage">
            <video autoPlay muted loop id="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <header className="banner">
                <div className="banner-content">
                    <img src={profileImg} alt="$IVfun Logo" className="banner-logo" />
                    <div className="listed-badge">Listed on SunSwap</div>
                    <h1 className="banner-title">$IVfun</h1>
                    <div>
                        <p className="banner-text">It's a hundred percent nothing!</p>
                    </div>
                </div>
                <img src={warriorImg} alt="Warrior" className="warrior-image" />

                <div className="action-buttons">
                    <a href="#how-to-buy" className="btn-red">How to buy IVfun?</a>
                </div>
            </header>

            <section className="social-icons">
                <a href="#tronscan" className="social-icon ic"><img src={tronscan} alt="TronScan" /></a>
                <a href="#sunswap" className="social-icon roun"><img src={sunswap} alt="SunSwap" /></a>
                <a href="#dextools" className="social-icon roun"><img src={dextools} alt="DexTools" /></a>
                <a href="#dexscreener" className="social-icon roun"><img src={dexscreener} alt="DexScreener" /></a>
                <a href="#cmc" className="social-icon roun"><img src={cmc} alt="CMC" /></a>
                <a href="#symbiosis" className="social-icon lroun"><img src={symbiosis} alt="Symbiosis" /></a>
            </section>

            <section className="additional-icons">
                <a href="#x" className="additional-icon"><img src={x} alt="X" /></a>
                <a href="#instagram" className="additional-icon"><img src={instagram} alt="Instagram" /></a>
                <a href="#gdrive" className="additional-icon"><img src={gdrive} alt="Google Drive" /></a>
                <a href="#telegram" className="additional-icon"><img src={telegram} alt="Telegram" /></a>
                <a href="#youtube" className="additional-icon"><img src={youtube} alt="YouTube" /></a>
            </section>
        </div>
    );
}

export default HomePage;
