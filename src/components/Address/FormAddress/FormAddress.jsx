import React, { useState } from "react";

import "./formAddressStyling.css";

function FormAddress() {
  const [fullName, setFullName] = useState("");
  const [fullPhone, setFullPhone] = useState("");
  const [fullStreet, setFullStreet] = useState("");

  function handleFullName(event) {
    const name = event.target.value;
    setFullName(name) 
  };

  function handleFullPhone(event) {
    const phone = event.target.value;
    setFullPhone(phone) 
  };

  function handleFullStreet(event) {
    const street = event.target.value;
    setFullStreet(street)
  };

  return (
    <form>
      <div className="name-street">
        <div className="name-phone">
          <div className="box-name">
            <label>Nama Lengkap : </label>
            <input type="text" id="fullName" name="fullName" className="full-name" placeholder="Input Full Name here" onChange={handleFullName} value={fullName}/>
          </div>
          <div className="box-phone">
            <label>Nomor Handphone : </label>
            <input type="nuber" id="fullPhone" name="fullPhone" className="full-phone" placeholder="Input Number Phone here" onChange={handleFullPhone} value={fullPhone}/>
          </div>
        </div>
        <div className="box-street">
          <label>Alamat : </label>
          <textarea name="street" id="" cols="51" rows="7" placeholder="Ex. Jl. Kemana Aja Gg.Bersama No. 183" onChange={handleFullStreet} value={fullStreet}></textarea>
        </div>
      </div>
    </form>
  );
};

export default FormAddress;