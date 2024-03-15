import React from "react";

import "./detailPaymentStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import ChooseTransfer from "../ChooseTransfer/ChooseTransfer";

function DetailPayment() {
  let address = localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : {};
    
  return (
    <div className="detail-payment">
      <div className="detailed-address">
        <DetailAddress address={address}/>
      </div>
      <ChooseTransfer/>
    </div>
  );
};

export default DetailPayment;