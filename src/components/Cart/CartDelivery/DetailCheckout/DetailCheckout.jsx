import React from "react";
import { useNavigate } from "react-router-dom";

import "./detailCheckoutStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import DetailItems from "../../DetailItems/DetailItems";

function DetailCheckout() {
  const navigate = useNavigate();

  return (
    <div className="detail-checkout">
      {/* Detail Address */}
      <div className="detail-address">
        <DetailAddress/>
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
      {/* Detail Items */}
      <DetailItems/>
    </div>
  );
};

export default DetailCheckout;