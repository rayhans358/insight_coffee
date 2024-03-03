import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./chooseAddressStyling.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getAddress } from "../../../app/api/address";

function ChooseAddress() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);

  async function fetchAddresses() {
    try {
      const response = await getAddress();
      setAddresses(response.data);

    } catch (error) {
      console.error("Error fetching addresses:", error);
    };
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  function handleSelectAddress(address) {
    // console.log(address, 'address');
    navigate('/carts/delivery', { 
      state: { setSelectedAddressId : address }
    })
  };

  return (
    <div>
      <Navbar />
      <section id="choose-address" className="choose-address">
        <h2>Pilih Alamat Pengiriman</h2>
        <div className="page-chooseAddress">
          <div className="box-address">
            {Array.isArray(addresses) && addresses.map((address, index) => (
              <div key={index} className="address" onClick={() => handleSelectAddress(address)}>
                <div className="label-radio">
                  <p>{address.fullName}, {address.phoneNumber}, {address.fullStreet}, {address.kelurahan}, {address.kecamatan}, {address.kabupaten}, {address.provinsi}</p>
                </div>
              </div>
            ))}
            <div className="submit-button">
              <input className="submit" type="submit" value="Edit Alamat" onClick={() => {navigate('/carts/edit-address')}} />
              <input className="submit" type="submit" value="Tambah Alamat Baru" onClick={() => {navigate('/carts/new-address')}} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChooseAddress;