import React from 'react';

import "./pageRegisterStyling.css";

import Navbar from '../../../../components/Navbar/Navbar';
import Footer from '../../../../components/Footer/Footer';
import Register from '../../../../components/Auth/Register/Register';

function PageRegister() {
  return (
    <div>
      <Navbar/>
        <section id="register-container" className="register-container">
          <Register/>
        </section>
      <Footer/>
    </div>
  );
};

export default PageRegister;