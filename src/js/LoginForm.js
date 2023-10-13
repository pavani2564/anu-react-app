import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
      <section id="b">
        <a href="/">Home</a>
        <h2 align="center">LOGIN</h2>
        <form id="loginForm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" required /><br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required /><br /><br />

          <button type="submit" value="Login">
            Login
          </button>

          <p>
            Forgot Password?
          </p>
        </form>
      </section>
    );
  }
}

export default LoginForm;
