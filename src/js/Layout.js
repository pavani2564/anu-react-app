import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, user, handleLogout }) => {
  return (
    <div className="App">
      <Header title="My Blog" user={user} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
