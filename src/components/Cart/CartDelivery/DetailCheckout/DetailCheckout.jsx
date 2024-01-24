import React from "react";
import { MapPin, User } from "react-feather";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./detailCheckoutStyling.css";

import empty from "../../../../assets/images/empty.png";
import { config } from "../../../../config";
import { formatRupiah } from "../../../../app/utils/currencyFormatter";

function DetailCheckout() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const multiply = String.fromCharCode(215); // (×)

  return (
    <div className="detail-checkout">
      {/* Detail Address */}
      <div className="detail-address">
        <h2>Alamat Pengiriman</h2>
        <div className="box-address">
          <div className="user-address">
            <div className="user">
              <User style={{fill: "white"}}/>
              <p>Rayhans</p>
            </div>
            <div className="address">
              <MapPin style={{fill: "green"}}/>
              <p>Jl. Kemana Aja Gg. Bersama No 183, Pontianak Barat, Kota Pontianak, Kalimantan Barat</p>
            </div>
          </div>
          <div className="choice-address">
            <button onClick={() => {
              navigate('/choose-address')
            }}>
              <span>Pilih Alamat</span>
            </button>
            <button onClick={() => {
              navigate('/new-address')
            }}>
              <span>Tambah Alamat Baru</span>
            </button>
          </div>
        </div>
      </div>
      {/* Detail Carts */}
      <div className="detail-carts">
        {cartItems.length === 0 ? (
          <div className="empty">
          <img src={empty} alt={empty} />
          <h3>Cart is Empty</h3>
          <h3>Let's go shopping first</h3>
        </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="box-carts">
              <p className="orders">PESANAN {index + 1}</p>
              <div className="outer-box">
                <div className="box-item">
                  <div className="gap-item">
                    <div className="image-item">
                      <span className="image">
                        <img src={`${config.api_host}/images/products/${item.image_url}`} alt={item.name} />
                      </span>
                    </div>
                    <div className="detail-items">
                      <div className="note-item">
                        <div className="cart-price">
                          <p className="cart">{item.name}</p>
                          <p className="price">
                            <span>{item.qty}</span>
                            {multiply}
                            <span>{formatRupiah(item.price)}</span>
                          </p>
                        </div>
                        <p className="note">Note: Strong</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DetailCheckout;