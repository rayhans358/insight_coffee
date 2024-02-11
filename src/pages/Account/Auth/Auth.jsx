import React, { useState } from 'react';

import "./authStyling.css";

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Register from '../../../components/Auth/Register/Register';
import Login from '../../../components/Auth/Login/Login';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleLogin = () => {
    setIsLogin(!isLogin);
  };

  
  return (
    <div>
      <Navbar/>
      <section className="auth-container" id="auth-container">
        {isLogin ? <Login onToggleLogin={handleToggleLogin} /> : <Register onToggleLogin={handleToggleLogin} />}
        {/* Sign In */}
        {/* <Login/> */}
        {/* Sign Up */}
        {/* <Register/> */}
      </section>
      <Footer/>
    </div>
  );
};

export default Auth;