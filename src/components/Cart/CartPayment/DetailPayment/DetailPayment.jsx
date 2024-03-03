import React from "react";

import "./detailPaymentStyling.css";

import DetailAddress from "../../../Address/DetailAddress/DetailAddress";
import ChooseTransfer from "../ChooseTransfer/ChooseTransfer";
import { useLocation } from "react-router-dom";

function DetailPayment({selectedAddressId}) {
  const location = useLocation();
  const selectedAddress = location.state ? location.state.setSelectedAddressId : null;
  console.log(selectedAddress, 'Selected Address');
  console.log(location.state, 'location state');
  console.log(location.state.setSelectedAddressId, 'location state address');
  return (
    <div className="detail-payment">
      <div className="detailed-address">
        <DetailAddress selectedAddressId={selectedAddressId}/>
      </div>
      <ChooseTransfer/>
    </div>
  );
};

export default DetailPayment;