import React, { useEffect, useState } from "react";

import "./selectRegionStyling.css";

import { getDistricts, getProvince, getRegency, getVillages } from "../../../app/api/region";

function SelectRegion({
  selectedProvince, setSelectedProvince, 
  selectedRegency, setSelectedRegency, 
  selectedDistrict, setSelectedDistrict, 
  selectedVillage, setSelectedVillage 
  }) {
  const [provinces, setProvinces] = useState([]);
  const [regences, setRegences] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

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

  return (
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
  );
};

export default SelectRegion;