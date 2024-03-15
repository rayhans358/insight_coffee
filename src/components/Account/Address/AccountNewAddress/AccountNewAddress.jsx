import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import "./accountNewAddressStyling.css";

import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import FormAddress from '../../../Address/FormAddress/FormAddress';
import SelectRegion from '../../../Address/SelectRegion/SelectRegion';
import { createAddress } from '../../../../app/api/address';

function AccountNewAddress() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullStreet, setFullStreet] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  function handleClickSubmit() {
    if (!fullName || !phoneNumber || !fullStreet) {
      Swal.fire({
        icon: "warning",
        title: "Harap isi nama lengkap, nomor handphone serta jalan terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    };
    if (!selectedProvince || !selectedRegency || !selectedDistrict || !selectedVillage) {
      Swal.fire({
        icon: "warning",
        title: "Harap pilih wilayah terlebih dahulu",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };

    const payload = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      fullStreet: fullStreet,
      provinsi: selectedProvince,
      kabupaten: selectedRegency,
      kecamatan: selectedDistrict,
      kelurahan: selectedVillage
    };

    createAddress(payload)
      .then(() => {
        if (payload) {
          Swal.fire({
            icon: "success",
            title: "Anda berhasil menambahkan alamat",
            showConfirmButton: false,
            timer: 2000
          });
        };
        navigate("/account/*");
      })
      .catch((err) => {
        console.error("Error creating address:", err);
        Swal.fire({
          icon: "error",
          title: "Terjadi kesalahan saat menambahkan alamat",
          showConfirmButton: false,
          timer: 2000
        });
      });
  };

  function handleClickCancel() {
    navigate("/account/*");
  }

  return (
    <div>
      <Navbar/>
      <section id="newAddress-container" className="newAddress-container">
        <h2>Account</h2>
        <div className="content-newAddress-container">
          <h2>Alamat Baru Pengiriman</h2>
          <div className="page-newAddress-container">
            <div className="box-newAddress-container">
              <FormAddress
                fullName={fullName}
                setFullName={setFullName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                fullStreet={fullStreet}
                setFullStreet={setFullStreet}
              />
              <SelectRegion
                selectedProvince={selectedProvince}
                setSelectedProvince={setSelectedProvince}
                selectedRegency={selectedRegency}
                setSelectedRegency={setSelectedRegency}
                selectedDistrict={selectedDistrict}
                setSelectedDistrict={setSelectedDistrict}
                selectedVillage={selectedVillage}
                setSelectedVillage={setSelectedVillage}
              />
            </div>
            <div className="submit-button-container">
              <input type="submit" value="Kembali" className="cancel" onClick={handleClickCancel} />
              <input type="submit" value="Tambah Alamat" className="submit" onClick={handleClickSubmit} />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AccountNewAddress;