import React from "react";

import "./cartAddressStyling.css";
import cart1 from "../../../assets/images/cart1.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { MapPin, User } from "react-feather";

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
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CartAddress;