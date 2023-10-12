import React, { useState } from 'react';
import './App1.css';
import About from './js/About';
import SignUpForm from './js/SignUpForm';
import LoginForm from './js/LoginForm';
import PageviewIcon from '@mui/icons-material/Pageview'; 

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAbout(true);
    setShowSignUp(false);
    setShowLogin(false);
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>
            Welcome to My Blog <PageviewIcon /> 
          </h1>
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about" onClick={handleAboutClick}>About</a></li>
          <li><a href="/signup" onClick={handleSignUpClick}>Sign Up</a></li>
          <li><a href="/login" onClick={handleLoginClick}>Login</a></li>
        </ul>
      </nav>
      <main>
        {showAbout && <About />}
        {showSignUp && <SignUpForm />}
        {showLogin && <LoginForm />}
      </main>
    </div>
  );
}

export default App;
