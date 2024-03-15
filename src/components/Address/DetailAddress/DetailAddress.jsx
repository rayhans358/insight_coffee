import React from "react";
import { MapPin, User } from "react-feather";

import "./detailAddressStyling.css";

function DetailAddress({address}) {
  const fullName = address && address.fullName;
  const phoneNumber = address && address.phoneNumber;
  const fullStreet = address && address.fullStreet;
  const kelurahan = address && address.kelurahan;
  const kecamatan = address && address.kecamatan;
  const kabupaten = address && address.kabupaten;
  const provinsi = address && address.provinsi;

  return (
    <div className="detailAddressContainer">
      <h2 className="detailAddress">Alamat Pengiriman</h2>
      <div className="box-address">
        <div className="user-address">
          <div className="user">
            <User style={{fill: "white"}}/>
            <p>{fullName}, {phoneNumber}</p>
          </div>
          <div className="address">
            <MapPin style={{fill: "green"}}/>
            <p>{`${fullStreet}, ${kelurahan}, ${kecamatan}, ${kabupaten}, ${provinsi}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAddress;