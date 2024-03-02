import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "./chooseAddressStyling.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getAddress } from "../../../app/api/address";

function ChooseAddress({setSelectedAddressId }) {
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

  function handleSelectAddress() {
    const selectedAddress = document.querySelector('input[name="address"]:checked');
    
    if (!selectedAddress) {
      Swal.fire({
        icon: "warning",
        title: "Anda harus memilih alamat terlebih dahulu",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    setSelectedAddressId(selectedAddress.value);
    navigate("/carts/delivery");
  };

  return (
    <div>
      <Navbar />
      <section id="choose-address" className="choose-address">
        <h2>Pilih Alamat Pengiriman</h2>
        <div className="page-chooseAddress">
          <div className="box-address">
            {Array.isArray(addresses) && addresses.map((address, index) => (
              <div key={index} className="address">
                <label className="label-radio">
                  <input type="radio" name="address" className="radio" value={address.id}/>
                  <p>{address.fullName}, {address.phoneNumber}, {address.fullStreet}, {address.kelurahan}, {address.kecamatan}, {address.kabupaten}, {address.provinsi}</p>
                </label>
              </div>
            ))}
            <div className="submit-button">
              <input className="submit" type="submit" value="Pilih Alamat" onClick={handleSelectAddress} />
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