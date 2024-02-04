import React from "react";

import "./detailPaymentStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import ChooseTransfer from "../ChooseTransfer/ChooseTransfer";

function DetailPayment() {
  return (
    <div className="detail-payment">
      <div className="detailed-address">
        <DetailAddress/>
      </div>
      <ChooseTransfer/>
    </div>
  );
};

export default DetailPayment;