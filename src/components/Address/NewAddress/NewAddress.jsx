import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./newAddressStyling.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { createAddress } from "../../../app/api/address";
import FormAddress from "../FormAddress/FormAddress";
import SelectRegion from "../SelectRegion/SelectRegion";


function NewAddress() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [fullPhone, setFullPhone] = useState("");
  const [fullStreet, setFullStreet] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  function handleClickSubmit() {
    if (!fullName || !fullPhone || !fullStreet) {
      Swal.fire({
        icon: "warning",
        title: "Harap isi nama lengkap, nomor handphone dan jalan terlebih dahulu",
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
        timer: 1500,
      });
      return;
    };

    const payload = {
      nama: fullName,
      handphone: fullPhone,
      alamat: fullStreet,
      provinsi: selectedProvince,
      kabupaten: selectedRegency,
      kecamatan: selectedDistrict,
      desa: selectedVillage
    };

    createAddress(payload)
      .then((response) => {
        if (!payload) {
          Swal.fire({
            icon: "error",
            title: "Terjadi kesalahan saat menambahkan alamat",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        console.log("Address created successfully:", response.data);
        navigate("/carts/delivery");
      })
      .catch((err) => {
        console.error("Error creating address:", err);
        Swal.fire({
          icon: "error",
          title: "Terjadi kesalahan saat menambahkan alamat",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div>
      <Navbar/>
      <section id="new-address" className="section-new-address">
        <h2>Alamat Baru Pengiriman</h2>
        <div className="page-newAddress">
          <div className="box-newAddress">
            <FormAddress
              fullName={fullName}
              setFullName={setFullName}
              fullPhone={fullPhone}
              setFullPhone={setFullPhone}
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
          <div className="submit-button">
            <input className="submit" type="submit" value="Tambah Alamat Baru" onClick={handleClickSubmit} />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default NewAddress;