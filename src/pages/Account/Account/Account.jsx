import React from 'react';

import "./accountStyling.css";
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import ChooseContent from '../../../components/Account/ChooseContent/ChooseContent';
import PageContent from '../../../components/Account/PageContent/PageContent';

function Account() {
  return (
    <div>
      <Navbar/>
      <section id="account-container" className="account-container">
        <h2>Account</h2>
        <div className="page-choose">
          <ChooseContent/>
          <PageContent/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Account;