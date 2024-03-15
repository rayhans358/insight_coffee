import React from 'react';

import "./pageContentStyling.css";

import Dashboard from '../Dashboard/Dashboard';
import OrderList from '../OrderList/OrderList';
import Address from '../Address/Address';

function PageContent({ selectedPage }) {
  return (
    <section id="pagecontent-container" className="pagecontent-container">
      {selectedPage === 'dashboard' && <Dashboard/>}
      {selectedPage === 'order-list' && <OrderList/>}
      {selectedPage === 'address' && <Address/>}
    </section>
  );
};

export default PageContent;