import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "./chooseAddressStyling.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

function ChooseAddress() {
  const navigate = useNavigate();

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
    navigate("/carts/delivery");
  };

  return (
    <div>
      <Navbar />
      <section id="choose-address" className="choose-address">
        <h2>Pilih Alamat Pengiriman</h2>
        <div className="page-chooseAddress">
          <div className="box-address">
            <div className="address">
              <label className="label-radio">
                <input type="radio" name="address" className="radio"  />
                <p>Khalid khasmiri, Jl. Kemana Aja Gg. Bersama No 183, Pontianak Barat, Kota Pontianak, Kalimantan Barat</p>
              </label>
            </div>
            <div className="address">
              <label className="label-radio">
                <input type="radio" name="address" className="radio"  />
                <p>Ismail ahmad kanabawi, Jl. Kemana Aja Gg. Bersama No 183, Pontianak Barat, Kota Pontianak, Kalimantan Barat</p>
              </label>
            </div>
            <div className="submit-button">
              <input className="submit" type="submit" value="Pilih Alamat" onClick={handleSelectAddress} />
              <input className="submit" type="submit" value="Edit Alamat" onClick={() => {navigate('/edit-address')}} />
              <input className="submit" type="submit" value="Tambah Alamat Baru" onClick={() => {navigate('/new-address')}} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ChooseAddress;