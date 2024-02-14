import React, { useEffect, useState } from "react";
import { Check } from "react-feather";

import "./chooseTransferStyling.css";

// import bank1 from "../../../../assets/images/bank/bank1.png";
import another1 from "../../../../assets/images/bank/another1.png";
import another2 from "../../../../assets/images/bank/another2.png";

import { config } from "../../../../config";
import { getBanks } from "../../../../app/api/bank";

function ChooseTransfer() {
  const [bank, setBank] = useState("");
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);

  useEffect(() => {
    fetchBanks();
  }, []);

  async function fetchBanks() {
    try {
      const response = await getBanks();
      setBanks(response.data.data);
    } catch (err) {
      console.error("Error fetching banks:", err);
    }
  };

  function handleBankClick(bank) {
    setSelectedBank(bank);
  };

  return (
    <div className="choose-transfer">
      <h2>Pilih metode pembayaran</h2>
      {/* Choose Bank */}
      <div className="choose-bank">
        <h2>Pilih Bank</h2>
        {banks.map((bank, index) => (
          <div className="bank" key={index} onClick={() => handleBankClick(bank)}>
            <img src={`${config.api_host}/images/banks/${bank.image_url}`} alt={bank.name} />
            <p>{bank.name}</p>
            {selectedBank && selectedBank._id === bank._id && <Check className="check" />}
          </div>
        ))}
      </div>
      {/* Another Transfer */}
      <div className="another-transfer">
        <h2>Pilih pembayaran lainnya</h2>
        <div className="another" onClick={() => setBank(config.billing.another_transfer1)}>
          <img src={another1} alt={another1} />
          <p>{config.billing.another_transfer1}</p>
          {
            bank === config.billing.another_transfer1 && <Check className="check"/>
          }
        </div>
        <div className="another" onClick={() => setBank(config.billing.another_transfer2)}>
          <img src={another2} alt={another2} />
          <p>{config.billing.another_transfer2}</p>
          {
            bank === config.billing.another_transfer2 && <Check className="check"/>
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseTransfer;