// Import React Router components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import icons and Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import your components and CSS
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Social from './components/Social';

function App() {
  return (
    <Router>
      <>
        <Header />
        <HomePage />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
        <Social />
        <Routes>
          {/* Add other routes here as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
