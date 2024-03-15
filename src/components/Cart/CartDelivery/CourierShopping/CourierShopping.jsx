import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./courierShoppingStyling.css";

import courier from "../../../../assets/images/courier.png";
import ChooseCourier from "../../ChooseCourier/ChooseCourier";
import TotalShopping from "../../TotalShopping/TotalShopping";

function CourierShopping() {
  const [selectedCourier, setSelectedCourier] = useState(null);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function handleNavigatePayment() {
    if (!selectedCourier) {
      Swal.fire({
        imageUrl: courier,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Courier image",
        title: "Anda harus memilih kurir terlebih dahulu",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };
    navigate('/carts/payment', {
      state:{ selectedCourier, price }
    })
  };

  return (
    <div className="courier-shopping">
      {/* Choice Courier */}
      <div className="detail-courier">
        <ChooseCourier
          setSelectedCourier={setSelectedCourier}
          setPrice={setPrice}
        />
      </div>
      {/* Detail Shopping */}
      <div className="detail-shopping">
        <TotalShopping
          selectedCourier={selectedCourier}
          price={price}
        />
        <div className="box-btn">
          <button className="payment-btn"onClick={handleNavigatePayment}>
            <span>Pilih metode pembayaran</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourierShopping;