import React, { useState } from 'react';
import './App1.css';
import About from './js/About';
import SignUpForm from './js/SignUpForm';
import LoginForm from './js/LoginForm';
import Monuments from './js/monuments';
import { Link } from 'react-router-dom';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMonuments, setShowMonuments] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAbout(true);
    setShowSignUp(false);
    setShowLogin(false);
    setShowMonuments(false);
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowSignUp(true);
    setShowLogin(false);
    setShowMonuments(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowSignUp(false);
    setShowLogin(true);
    setShowMonuments(false);
  };

  const handleMonumentsClick = (e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowSignUp(false);
    setShowLogin(false);
    setShowMonuments(true);
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Visit India❤️</h1>
        </div>
      </header>
      <nav>
        <ul>
          <li><Link to="/about" onClick={handleAboutClick}>About</Link></li>
          <li><Link to="/signup" onClick={handleSignUpClick}>Sign Up</Link></li>
          <li><Link to="/login" onClick={handleLoginClick}>Login</Link></li>
        </ul>
      </nav>
      <div className="know-more-button">
        <button onClick={handleMonumentsClick}>Click Here to Know More</button>
      </div>
      <main>
        {showAbout && <About />}
        {showSignUp && <SignUpForm />}
        {showLogin && <LoginForm />}
        {showMonuments && <Monuments />}
      </main>
    </div>
  );
}

export default App;
