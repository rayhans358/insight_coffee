import React from 'react';

import "./pageContentStyling.css";

// import Dashboard from '../Dashboard/Dashboard';
import OrderList from '../OrderList/OrderList';
// import Address from '../Address/Address';

function PageContent() {
  return (
    <section id="pagecontent-container" className="pagecontent-container">
      {/* <Dashboard/> */}
      <OrderList/>
      {/* <Address/> */}
    </section>
  );
};

export default PageContent;