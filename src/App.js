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

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowSignUp(false);
    setShowLogin(false);
    setShowMonuments(false);
  };

  const handleSignUpClick = () => {
    setShowAbout(false);
    setShowSignUp(true);
    setShowLogin(false);
    setShowMonuments(false);
  };

  const handleLoginClick = () => {
    setShowAbout(false);
    setShowSignUp(false);
    setShowLogin(true);
    setShowMonuments(false);
  };

  const handleMonumentsClick = () => {
    setShowAbout(false);
    setShowSignUp(false);
    setShowLogin(false);
    setShowMonuments(true);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Welcome to India</h1>
        <p>Discover the rich heritage and culture of India.</p>
      </header>
      <nav className="app-nav">
        <ul>
          <li><Link to="/about" onClick={handleAboutClick}>About Us</Link></li>
          <li><Link to="/signup" onClick={handleSignUpClick}>Sign Up</Link></li>
          <li><Link to="/login" onClick={handleLoginClick}>Login</Link></li>
        </ul>
      </nav>
      <div className="dive-in-button">
        <button onClick={handleMonumentsClick}>Let's Dive In</button>
      </div>
      <main className="app-main">
        {showAbout && <About />}
        {showSignUp && <SignUpForm />}
        {showLogin && <LoginForm />}
        {showMonuments && <Monuments />}
      </main>
    </div>
  );
}

export default App;
