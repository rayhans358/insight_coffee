import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./detailShoppingStyling.css";

import { config } from "../../../../config";
import { formatRupiah, sumPrice } from "../../../../app/utils/currencyFormatter";

function DetailShopping() {
  const cartItems = useSelector((state) => state.cart);
  const [selectedCourier, setSelectedCourier] = useState(null);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  function handleCourierSelection(courier, ongkir) {
    setSelectedCourier(courier);
    setPrice(parseFloat(ongkir));
  };

  function handleNavigatePayment() {
    if (!selectedCourier) {
      Swal.fire({
        icon: "warning",
        title: "Anda harus memilih kurir terlebih dahulu",
        showConfirmButton: false,
        timer: 1500
      });
      return
    }
    navigate('/products')
  };

  return (
    <div className="courier-shopping">
      {/* Choice Courier */}
      <div className="detail-courier">
        <div className="box-detailCourier">
          <p className="text">Pilih kurir yang anda inginkan</p>
          <div className="choice-delivery">
            <button 
              style={{background: "green", border: "2px solid green"}} 
              onClick={() => handleCourierSelection(config.apk_goceng, config.ongkir_goceng)}
            >
              <span>Goceng</span>
              <hr className="gap-text" />
              <span>{formatRupiah(config.ongkir_goceng)}</span>
            </button>
            <button 
              style={{background: "red", border: "2px solid red"}} 
              onClick={() => handleCourierSelection(config.apk_mantap, config.ongkir_mantap)}
            >
              <span>Mantap</span>
              <hr />
              <span>{formatRupiah(config.ongkir_mantap)}</span>
            </button>
            <button style={{background: "#EE4D2D", border: "2px solid #EE4D2D"}} onClick={() => handleCourierSelection(config.apk_shopoo, config.ongkir_shopoo)}>
              <span>Shopoo</span>
              <hr />
              <span>{formatRupiah(config.ongkir_shopoo)}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Detail Shopping */}
      <div className="detail-shopping">
        <div className="box-detailShopping">
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
          <div className="box-btn">
            <button className="payment-btn" onClick={handleNavigatePayment}>
              <span>Payment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailShopping;