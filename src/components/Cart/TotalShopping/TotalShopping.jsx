import React from "react";
import { useSelector } from "react-redux";

import "./totalShoppingStyling.css";

import { formatRupiah, sumPrice } from "../../../app/utils/currencyFormatter";

function TotalShopping({selectedCourier, price}) {
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="total-shopping">
      <h2>Ringkasan belanja</h2>
      {cartItems.length === 0 ? (
        <div className="body-item">
          <div className="fill-itemPrice">
            <p style={{fontWeight: "500", color: "grey"}}>Total Harga ({totalQuantity} barang)</p>
            <p style={{fontWeight: "bold", color: "black"}}>{formatRupiah(0)}</p>
          </div>
          <div className="fill-itemPrice">
            <p style={{fontWeight: "500", color: "grey"}}>Total Ongkos Kirim</p>
            <p style={{fontWeight: "bold", color: "black"}}>{formatRupiah(0)}</p>
          </div>
        </div>
      ) : (
        <div className="body-item">
          <div className="fill-itemPrice">
            <p style={{fontWeight: "500", color: "grey"}}>Total Harga ({totalQuantity} barang)</p>
            <p style={{fontWeight: "bold", color: "black"}}>{formatRupiah(sumPrice(cartItems))}</p>
          </div>
          {
            price !== 0 &&
            <div className="fill-itemPrice">
              <p style={{fontWeight: "500", color: "grey"}}>Total Ongkos Kirim ({selectedCourier})</p>
              <p style={{fontWeight: "bold", color: "black"}}>{formatRupiah(price)}</p>
            </div>
          }
        </div>
      )}
      {cartItems.length === 0 ? (
        <div className="total-price">
          <span style={{fontWeight: "500"}}>Total Shopping</span>
          <span style={{fontWeight: "bold"}}>{formatRupiah(0)}</span>
        </div>
      ) : (
        <div className="total-price">
          <span style={{fontWeight: "500"}}>Total Shopping</span>
          <span style={{fontWeight: "bold"}}>{formatRupiah(sumPrice(cartItems) + price)}</span>
        </div>
      )}
    </div>
  );
};

export default TotalShopping;