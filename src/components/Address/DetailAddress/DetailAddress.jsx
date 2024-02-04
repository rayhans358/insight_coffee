import React from "react";
import { MapPin, User } from "react-feather";

import "./detailAddressStyling.css";

function DetailAddress() {
  return (
    <div className="detailAddressContainer">
      <h2 className="detailAddress">Alamat Pengiriman</h2>
      <div className="box-address">
        <div className="user-address">
          <div className="user">
            <User style={{fill: "white"}}/>
            <p>Khidir karawita, +62-859-555-091</p>
          </div>
          <div className="address">
            <MapPin style={{fill: "green"}}/>
            <p>Jl. Kemana Aja Gg. Bersama No 183, Pontianak Barat, Kota Pontianak, Kalimantan Barat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAddress;