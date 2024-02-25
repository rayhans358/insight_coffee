import React from 'react';

import "./pageLoginStyling.css";

import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Login from '../../../../components/Auth/Login/Login';

function PageLogin() {
  return (
    <div>
      <Navbar/>
        <section id="login-container" className="login-container">
          <Login/>
        </section>
      <Footer/>
    </div>
  );
};

export default PageLogin;