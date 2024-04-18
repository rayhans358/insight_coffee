import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

import "./addressStyling.css";

import { getAddress } from '../../../app/api/address';

function Address() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [loadingDataAddress, setLoadingDataAddress] =  useState(false);

  async function fetchAddresses() {
    setLoadingDataAddress(true);
    try {
      const response = await getAddress();
      setAddresses(response.data);

    } catch (error) {
      console.error("Error fetching addresses:", error);

    } finally {
      setLoadingDataAddress(false);
    };
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <section id="address-container" className="address-container">
      <h3 className="text-address">Address</h3>
      <div className="address-account" onClick={() => {
        navigate('/account/new-address')
      }}>
        <FontAwesomeIcon icon={faPlus} className="iconPlus"/>
        <h3>Tambah Alamat</h3>
      </div>
      {loadingDataAddress ? (
        <div className="loadingAddress-container">
          <div className="loadingAddress-content">
            <FadeLoader color={"#b6895b"} loading={true} size={30} /> 
          </div>
          <p className="loadingAddress-text">Loading addresses . . .</p>
        </div>
      ) : (
        <table className="table-address">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, index) => (
              <tr key={index}>
                <td>{address.fullName},
                <br/>{address.phoneNumber}</td>
                <td>{address.fullStreet}, {address.kelurahan}, {address.kecamatan}, {address.kabupaten}, {address.provinsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Address;