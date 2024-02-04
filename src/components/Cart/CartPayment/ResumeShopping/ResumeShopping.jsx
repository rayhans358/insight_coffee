import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TotalShopping from "../../TotalShopping/TotalShopping";

import "./resumeShoppingStyling.css";

function ResumeShopping() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCourier, price } = location.state;

  function handleNavigatePayment() {
    navigate('/products', {state:{
      selectedCourier,
      price
    }})
  };

  return (
    <div className="resume-shopping">
      <div className="fill-resumeShopping">
        <TotalShopping
          selectedCourier={selectedCourier}
          price={price}
        />
        <div className="box-btn">
          <button className="payment-btn"onClick={handleNavigatePayment}>
            <span>Bayar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeShopping;