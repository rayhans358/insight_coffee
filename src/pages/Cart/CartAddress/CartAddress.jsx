import React from "react";
import { MapPin, User } from "react-feather";

import "./cartAddressStyling.css";
import cart1 from "../../../assets/images/cart1.jpg";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

function CartAddress() {
  const multiply = String.fromCharCode(215); // (×)

  return (
    <div>
      <Navbar/>
      <section id="cart-address" className="cart-address">
        <h2>Pengiriman</h2>
        <div className="page-checkout">
          {/* Detail Checkout */}
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
                    <p>Jl. H. Rais. A. Rahman Gg. Harapan No 83, Pontianak Barat, Kota Pontianak, Kalimantan Barat</p>
                  </div>
                </div>
                <div className="choice-address">
                  <button>
                    <span>Pilih Alamat</span>
                  </button>
                  <button>
                    <span>Tambah Alamat Baru</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Detail Carts */}
            <div className="detail-carts">
              <div className="box-carts">
                <p className="orders">PESANAN 1</p>
                <div className="outer-box">
                  <div className="box-item">
                    <div className="gap-item">
                      <div className="image-item">
                        <span className="image">
                          <img src={cart1} alt="cart1" />
                        </span>
                      </div>
                      <div className="detail-items">
                        <div className="note-item">
                          <div className="cart-price">
                            <p className="cart">Glutinous Rice Cake with Sakura Flowers Moti</p>
                            <p className="price">
                              <span>1</span>
                              {multiply}
                              <span>100.000</span>
                            </p>
                          </div>
                          <p className="note">Note: Strong</p>
                        </div>
                        <div className="choice-delivery">
                          <button style={{background: "green", border: "2px solid green"}}>
                            <span>GoCeng</span>
                            <span>Rp. 5.000</span>
                          </button>
                          <button style={{background: "red", border: "2px solid red"}}>
                            <span>Mantap</span>
                            <span>Rp. 7.000</span>
                          </button>
                          <button style={{background: "#EE4D2D", border: "2px solid #EE4D2D"}}>
                            <span>Shopoo</span>
                            <span>Rp. 9.000</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Detail Shopping */}
          <div className="detail-shopping">
            <div className="box-detailShopping">
              <h2>Ringkasan belanja</h2>
              <div className="body-item">
                <div className="fill-itemPrice">
                  <p style={{fontWeight: "500", color: "grey"}}>Total Harga(2 barang)</p>
                  <p style={{fontWeight: "bold", color: "black"}}>Rp. 100.000</p>
                </div>
                <div className="fill-itemPrice">
                  <p style={{fontWeight: "500", color: "grey"}}>Total Ongkos Kirim</p>
                  <p style={{fontWeight: "bold", color: "black"}}>Rp. 5.000</p>
                </div>
              </div>
              <div className="total-price">
                <span style={{fontWeight: "500"}}>Total Shopping</span>
                <span style={{fontWeight: "bold"}}>Rp. 100.000</span>
              </div>
              <div className="box-btn">
                <button className="payment-btn">
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartAddress;