import React, { useState } from "react";

import "./cartPaymentStyling.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailPayment from "../../../components/Cart/CartPayment/DetailPayment/DetailPayment";
import ResumeShopping from "../../../components/Cart/CartPayment/ResumeShopping/ResumeShopping";

function CartPayment() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div>
      <Navbar/>
      <section id="cart-payments" className="cart-payments">
        <h2 className="text-payments">Pembayaran</h2>
        <div className="page-payments">
          <DetailPayment setSelectedMethod={setSelectedMethod}/>
          <ResumeShopping selectedMethod={selectedMethod}/>
        </div>
      </section>
      <Footer/>
    </div>
  )
};

export default CartPayment;