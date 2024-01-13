import React from "react";

import "./cartAddressStyling.css";
import cart1 from "../../../assets/images/cart1.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

function CartAddress() {
  return (
    <div>
      <Navbar/>
      <section id="cart-address" className="cart-address">
        <h2>Pengiriman</h2>
        <div className="page-checkout">
          {/* Detail Checkout */}
          <div className="detail-checkout">
            <div className="detail-address">
              <h2>Alamat Pengiriman</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartAddress;