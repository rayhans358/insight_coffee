import React, { useEffect, useState } from "react";
import { Check } from "react-feather";

import "./chooseTransferStyling.css";

import { config } from "../../../../config";
import { getBanks, getMiniMarkets } from "../../../../app/api/bank";

function ChooseTransfer() {
  const [banks, setBanks] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    fetchBanks();
    fetchMiniMarkets();
  }, []);

  async function fetchBanks() {
    try {
      const selectBank = await getBanks();
      setBanks(selectBank.data.data);
    } catch (err) {
      console.error("Error fetching banks:", err);
    };
  };

  async function fetchMiniMarkets() {
    try {
      const selectMiniMarket = await getMiniMarkets();
      setMarkets(selectMiniMarket.data.data);
    } catch (err) {
      console.error("Error fetching mini markets:", err);
    };
  };

  function handleMethodClick(method) {
    setSelectedMethod(method);
  };

  return (
    <div className="choose-transfer">
      <h2>Pilih metode pembayaran</h2>
      {/* Choose Bank */}
      <div className="choose-bank">
        <h2>Pilih Bank</h2>
        {banks.map((bank, index) => (
          <div className="bank" key={index} onClick={() => handleMethodClick(bank)}>
            <img src={`${config.api_host}/images/banks/${bank.image_url}`} alt={bank.name} />
            <p>{bank.name}</p>
            {selectedMethod && selectedMethod._id === bank._id && <Check className="check" />}
          </div>
        ))}
      </div>
      {/* Another Transfer */}
      <div className="another-transfer">
        <h2>Pilih pembayaran lainnya</h2>
        {markets.map((market, index) => (
          <div className="another" key={index} onClick={() => handleMethodClick(market)}>
            <img src={`${config.api_host}/images/mini-markets/${market.image_url}`} alt={market.name} />
            <p>{market.name}</p>
            {selectedMethod && selectedMethod._id === market._id && <Check className="check" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTransfer;