import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import "./addressStyling.css";

import { getAddress } from '../../../app/api/address';

function Address() {
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

  return (
    <section id="address-container" className="address-container">
      <h3 className="text-address">Address</h3>
      <div className="address-account" onClick={() => {
        navigate('/account/new-address')
      }}>
        <FontAwesomeIcon icon={faPlus} className="iconPlus"/>
        <h3>Tambah Alamat</h3>
      </div>
      <table className="table-address">
        <tr>
          <th>Full Name</th>
          <th>Detail</th>
        </tr>
        {addresses.map((address, index) => (
        <tr key={index}>
          <td>{address.fullName},
          <br/>{address.phoneNumber}</td>
          <td>{address.fullStreet}, {address.kelurahan}, {address.kecamatan}, {address.kabupaten}, {address.provinsi}</td>
        </tr>
        ))}
      </table>
    </section>
  );
};

export default Address;