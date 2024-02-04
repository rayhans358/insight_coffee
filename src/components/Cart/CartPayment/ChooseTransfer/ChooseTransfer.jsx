import React, { useState } from "react";
import { Check } from "react-feather";

import "./chooseTransferStyling.css";

import bank1 from "../../../../assets/images/bank/bank1.png";
import bank2 from "../../../../assets/images/bank/bank2.png";
import bank3 from "../../../../assets/images/bank/bank3.png";
import bank4 from "../../../../assets/images/bank/bank4.png";
import bank5 from "../../../../assets/images/bank/bank5.png";
import bank6 from "../../../../assets/images/bank/bank6.png";
import bank7 from "../../../../assets/images/bank/bank7.png";
import bank8 from "../../../../assets/images/bank/bank8.png";
import bank9 from "../../../../assets/images/bank/bank9.png";
import bank10 from "../../../../assets/images/bank/bank10.png";

import another1 from "../../../../assets/images/bank/another1.png";
import another2 from "../../../../assets/images/bank/another2.png";

import { config } from "../../../../config";

function ChooseTransfer() {
  const [bank, setBank] = useState("");

  return (
    <div className="choose-transfer">
      <h2>Pilih metode pembayaran</h2>
      {/* Choose Bank */}
      <div className="choose-bank">
        <h2>Pilih Bank</h2>
        <div className="bank" onClick={() => setBank(config.billing.bank_name1)}>
          <img src={bank1} alt={bank1} />
          <p>{config.billing.bank_name1}</p>
          {
            bank === config.billing.bank_name1 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name2)}>
          <img src={bank2} alt={bank2} />
          <p>{config.billing.bank_name2}</p>
          {
            bank === config.billing.bank_name2 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name3)}>
          <img src={bank3} alt={bank3} />
          <p>{config.billing.bank_name3}</p>
          {
            bank === config.billing.bank_name3 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name4)}>
          <img src={bank4} alt={bank4} />
          <p>{config.billing.bank_name4}</p>
          {
            bank === config.billing.bank_name4 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name5)}>
          <img src={bank5} alt={bank5} />
          <p>{config.billing.bank_name5}</p>
          {
            bank === config.billing.bank_name5 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name6)}>
          <img src={bank6} alt={bank6} />
          <p>{config.billing.bank_name6}</p>
          {
            bank === config.billing.bank_name6 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name7)}>
          <img src={bank7} alt={bank7} />
          <p>{config.billing.bank_name7}</p>
          {
            bank === config.billing.bank_name7 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name8)}>
          <img src={bank8} alt={bank8} />
          <p>{config.billing.bank_name8}</p>
          {
            bank === config.billing.bank_name8 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name9)}>
          <img src={bank9} alt={bank9} />
          <p>{config.billing.bank_name9}</p>
          {
            bank === config.billing.bank_name9 && (<Check className="check"/>)
          }
        </div>
        <div className="bank" onClick={() => setBank(config.billing.bank_name10)}>
          <img src={bank10} alt={bank10} />
          <p>{config.billing.bank_name10}</p>
          {
            bank === config.billing.bank_name10 && (<Check className="check"/>)
          }
        </div>
      </div>
      {/* Another Transfer */}
      <div className="another-transfer">
        <h2>Pilih pembayaran lainnya</h2>
        <div className="another" onClick={() => setBank(config.billing.another_transfer1)}>
          <img src={another1} alt={another1} />
          <p>{config.billing.another_transfer1}</p>
          {
            bank === config.billing.another_transfer1 && (<Check className="check"/>)
          }
        </div>
        <div className="another" onClick={() => setBank(config.billing.another_transfer2)}>
          <img src={another2} alt={another2} />
          <p>{config.billing.another_transfer2}</p>
          {
            bank === config.billing.another_transfer2 && (<Check className="check"/>)
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseTransfer;