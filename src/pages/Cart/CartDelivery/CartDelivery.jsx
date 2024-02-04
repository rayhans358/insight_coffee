import React from "react";

import "./cartDeliveryStyling.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailCheckout from "../../../components/Cart/CartDelivery/DetailCheckout/DetailCheckout";
import CourierShopping from "../../../components/Cart/CartDelivery/CourierShopping/CourierShopping";

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
          <CourierShopping/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartDelivery;