import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './js/Layout';
import Home from './js/Home';
import NewPost from './js/NewPost';
import About from './js/About';
import Login from './js/Login';
import "./js/App1.css";

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Layout user={user} handleLogout={handleLogout}>
        <Route path="/newpost" render={() => <NewPost handleNewPost={handleNewPost} />} />
        <Route path="/about" component={About} />
        <Route path="/login" render={() => <Login handleLogin={handleLogin} />} />
        <Route path="/" exact component={() => <Home user={user} posts={posts} />} />
      </Layout>
    </Router>
  );
}

export default App;
