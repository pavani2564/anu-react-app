import React from 'react';
import './SignUpForm.css';

class SignUpForm extends React.Component {
  render() {
    return (
      <section id="a">
        <a href="/">Home</a>
        <h2 align="center">SIGN UP</h2>
        <form id="signupForm" >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required /><br /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your Email" required /><br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your Password" required /><br /><br />

          <button type="submit" value="Sign Up"  >
            Sign Up
          </button>
        </form>
      </section>
    );
  }
}

export default SignUpForm;
