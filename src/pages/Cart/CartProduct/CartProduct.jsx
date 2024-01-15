import React from "react";

import "./cartProductStyling.css";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailCarts from "../../../components/Cart/CartProduct/DetailCarts/DetailCarts";
import ShoppingSummary from "../../../components/Cart/CartProduct/ShoppingSummary/ShoppingSummary";

function CartProduct() {
  return (
    <div>
      <Navbar/>
      <section id="cart-product" className="cart-product">
        <div className="page-cart">
          <DetailCarts/>
          <ShoppingSummary/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartProduct;