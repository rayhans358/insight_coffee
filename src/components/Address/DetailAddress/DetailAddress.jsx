import React from "react";
import { MapPin, User } from "react-feather";
import { useLocation } from "react-router-dom";

import "./detailAddressStyling.css";

function DetailAddress() {
  const location = useLocation();
  const selectedAddress = location.state ? location.state.setSelectedAddressId : null;
  // console.log(selectedAddress, 'Selected Address');
  // console.log(location.state, 'location state');
  const fullName = selectedAddress && selectedAddress.fullName;
  const phoneNumber = selectedAddress && selectedAddress.phoneNumber;
  const fullStreet = selectedAddress && selectedAddress.fullStreet;
  const kelurahan = selectedAddress && selectedAddress.kelurahan;
  const kecamatan = selectedAddress && selectedAddress.kecamatan;
  const kabupaten = selectedAddress && selectedAddress.kabupaten;
  const provinsi = selectedAddress && selectedAddress.provinsi;
  // console.log(fullName, 'FN');

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