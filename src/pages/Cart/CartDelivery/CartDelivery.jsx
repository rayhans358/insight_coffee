import React from "react";

import "./cartDeliveryStyling.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailCheckout from "../../../components/Cart/CartDelivery/DetailCheckout/DetailCheckout";
import DetailShopping from "../../../components/Cart/CartDelivery/DetailShopping/DetailShopping";

function CartDelivery() {
  return (
    <div>
      <Navbar/>
      <section id="cart-address" className="cart-address">
        <h2>Pengiriman</h2>
        <div className="page-checkout">
          {/* Detail Checkout */}
          <DetailCheckout/>
          {/* Detail Shopping */}
          <DetailShopping/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartDelivery;