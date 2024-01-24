import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./newAddressStyling.css";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getDistricts, getProvince, getRegency, getVillages } from "../../../app/api/region";
import { createAddress } from "../../../app/api/address";


function NewAddress() {
  const navigate = useNavigate();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [regences, setRegences] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [fullName, setFullName] = useState("");
  const [fullStreet, setFullStreet] = useState("");

  async function fetchProvince() {
    try {
      const provincesData = await getProvince();
      setProvinces(provincesData.data.data);
      // console.log(provincesData.data.data, 'propinsi');

    } catch (err) {
      console.error("Error fetching provinces:", err)
    };
  };

  async function fetchRegency(kode) {
    try {
      const regencesData = await getRegency(kode);
      setRegences(regencesData.data.data);
      // console.log(regencesData.data.data, 'kota');

    } catch (err) {
      console.error("Error fetching regences:", err)
    };
  };

  async function fetchDistrict(kode) {
    try {
      const districtsData = await getDistricts(kode);
      setDistricts(districtsData.data.data)
      // console.log(districtsData.data.data, 'camat');

    } catch (err) {
      console.error("Error fetching districts:", err)
    };
  };

  async function fetchVillage(kode) {
    try {
      const villagesData = await getVillages(kode);
      setVillages(villagesData.data.data)
      // console.log(villagesData.data.data, 'desa');

    } catch (err) {
      console.error("Error fetching villages:", err)
    };
  };

  useEffect(() => {
      fetchProvince();
  }, []);

  function handleProvinceChange(event) {
    const selectProvince = event.target.value;
    fetchRegency(selectProvince)
    setSelectedProvince(selectProvince)
  };

  function handleRegencyChange(event) {
    const selectRegency = event.target.value;
    fetchDistrict(selectRegency)
    setSelectedRegency(selectRegency)
  };

  function handleDistrictChange(event) {
    const selectDistrict = event.target.value;
    fetchVillage(selectDistrict)
    setSelectedDistrict(selectDistrict)
  };

  function handleVillageChange(event) {
    const selectVillage = event.target.value;
    setSelectedVillage(selectVillage)
  };

  function handleFullName(event) {
    const name = event.target.value;
    setFullName(name) 
  };

  function handleFullStreet(event) {
    const street = event.target.value;
    setFullStreet(street)
  };

  function handleClickSubmit() {
    if (!selectedProvince || !selectedRegency || !selectedDistrict || !selectedVillage) {
      Swal.fire({
        icon: "warning",
        title: "Harap lengkapi semua kolom wilayah terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    };

    if (!fullName || !fullStreet) {
      Swal.fire({
        icon: "warning",
        title: "Harap lengkapi kolom nama lengkap dan jalan terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const payload = {
      nama: fullName,
      alamat: fullStreet,
      provinsi: selectedProvince,
      kabupaten: selectedRegency,
      kecamatan: selectedDistrict,
      desa: selectedVillage
    };

    createAddress(payload)
      .then((response) => {
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
            <form>
            <div className="name-street">
              <div className="box-name">
                <label>Nama : </label>
                <input type="text" id="fullName" name="fullName" className="full-name" placeholder="Input Full Name here" onChange={handleFullName} value={fullName}/>
              </div>
              <div className="box-street">
                <label>Alamat : </label>
                <textarea name="street" id="" cols="28" rows="9" placeholder="Ex. Jl. Kemana Aja Gg.Bersama No. 183" onChange={handleFullStreet} value={fullStreet}></textarea>
              </div>
            </div>
            </form>
            <div className="box-region">
              <div className="select-region">
                <div className="province-district">
                  <div className="province">
                    <label>Provinsi : </label>
                    <select onChange={handleProvinceChange} value={selectedProvince}>
                      <option value="">Pilih Provinsi</option>
                      {provinces.map((province, index) => (
                        <option key={index} value={province.kode}>
                          {province.nama}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="district">
                    <label>Kecamatan : </label>
                    <select onChange={handleDistrictChange} value={selectedDistrict}>
                      <option value="">Pilih Kecamatan</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district.kode}>
                          {district.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="regency-village">
                  <div className="regency">
                    <label>Kabupaten/Kota : </label>
                    <select onChange={handleRegencyChange} value={selectedRegency}>
                      <option value="">Pilih Kabupaten/Kota</option>
                      {regences.map((regency, index) => (
                        <option key={index} value={regency.kode}>
                          {regency.nama}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="village">
                    <label>Kelurahan/Desa : </label>
                    <select onChange={handleVillageChange} value={selectedVillage}>
                      <option value="">Pilih Kelurahan/Desa</option>
                      {villages.map((village, index) => (
                        <option key={index} value={village.kode}>
                          {village.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
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