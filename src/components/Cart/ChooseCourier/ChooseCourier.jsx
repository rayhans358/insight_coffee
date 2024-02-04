import React from "react";

import "./chooseCourierStyling.css";

import { formatRupiah } from "../../../app/utils/currencyFormatter";
import { config } from "../../../config";

function ChooseCourier({setSelectedCourier, setPrice}) {
  function handleCourierSelection(courier, ongkir) {
    setSelectedCourier(courier);
    setPrice(parseFloat(ongkir));
  };

  return (
    <div className="choose-courier">
      <p className="text">Pilih kurir yang anda inginkan</p>
      <div className="choice-delivery">
        <button 
          style={{background: "green", border: "2px solid green"}} 
              onClick={() => handleCourierSelection(config.apk_goceng, config.ongkir_goceng)}
        >
          <span>Goceng</span>
          <span>{formatRupiah(config.ongkir_goceng)}</span>
        </button>
        <button 
          style={{background: "red", border: "2px solid red"}} 
          onClick={() => handleCourierSelection(config.apk_mantap, config.ongkir_mantap)}
        >
          <span>Mantap</span>
          <span>{formatRupiah(config.ongkir_mantap)}</span>
        </button>
        <button 
          style={{background: "#EE4D2D", border: "2px solid #EE4D2D"}} 
          onClick={() => handleCourierSelection(config.apk_shopoo, config.ongkir_shopoo)}
        >
          <span>Shopoo</span>
          <span>{formatRupiah(config.ongkir_shopoo)}</span>
        </button>
      </div>
    </div>
  );
};

export default ChooseCourier;