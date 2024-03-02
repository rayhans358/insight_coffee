import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./detailCheckoutStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import DetailItems from "../../DetailItems/DetailItems";
import ChooseAddress from "../../../Address/ChooseAddress/ChooseAddress";

function DetailCheckout() {
  const navigate = useNavigate();
  const [selectedAddressId, setSelectedAddressId] = useState('');

  return (
    <div className="detail-checkout">
      {/* Detail Address */}
      <div className="detail-address">
        <DetailAddress selectedAddressId={selectedAddressId}/>
        <div className="choice-address">
          <button onClick={() => {
            <ChooseAddress setSelectedAddressId={setSelectedAddressId}/>
            navigate('/carts/choose-address')
          }}>
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