import React from 'react';
import { Link } from 'react-router-dom';

function Home({ user, posts }) {
  return (
    <div className="home-container">
      <h2>Home</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>
          You are not logged in. Please <Link to="/login">log in</Link> or{' '}
          <Link to="/signup">sign up</Link>.
        </p>
      )}
    </div>
  );
}

export default Home;
