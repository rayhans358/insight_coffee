import React from "react";

import "./cartPaymentStyling.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailPayment from "../../../components/Cart/CartPayment/DetailPayment/DetailPayment";
import ResumeShopping from "../../../components/Cart/CartPayment/ResumeShopping/ResumeShopping";

function CartPayment() {
  return (
    <div>
      <Navbar/>
      <section id="cart-payments" className="cart-payments">
        <h2 className="text-payments">Pembayaran</h2>
        <div className="page-payments">
          {/* Detail Payment */}
          <DetailPayment/>
          {/* Resume Shopping */}
          <ResumeShopping/>
        </div>
      </section>
      <Footer/>
    </div>
  )
};

export default CartPayment;