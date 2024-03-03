import React from "react";
import { useNavigate } from "react-router-dom";

import "./detailCheckoutStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import DetailItems from "../../DetailItems/DetailItems";

function DetailCheckout({ address, selectedAddressId }) {
  const navigate = useNavigate();

  function handleChoosenAddress() {
    navigate('/carts/choose-address', {
      state: { setSelectedAddressId : address }
    })
  };

  return (
    <div className="detail-checkout">
      {/* Detail Address */}
      <div className="detail-address">
        <DetailAddress selectedAddressId={selectedAddressId}/>
        <div className="choice-address">
          <button onClick={handleChoosenAddress}>
            <span>Pilih Alamat</span>
          </button>
          <button onClick={() => {
            navigate('/carts/new-address')
          }}>
            <span>Tambah Alamat Baru</span>
          </button>
        </div>
      </div>
      {/* Detail Items */}
      <DetailItems/>
    </div>
  );
};

export default DetailCheckout;