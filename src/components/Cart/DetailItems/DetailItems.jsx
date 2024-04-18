import React from "react";
import { useSelector } from "react-redux";

import "./detailItemsStyling.css";

import { config } from "../../../config";
import { formatRupiah } from "../../../app/utils/currencyFormatter";

function DetailItems() {
  const cartItems = useSelector((state) => state.cart);
  const multiply = String.fromCharCode(215); // (×)

  return (
    <div className="detail-items">
      {cartItems.map((item, index) => (
        <div key={index} className="box-items">
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
      ))}
    </div>
  );
};

export default DetailItems;