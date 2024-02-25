import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import "./addressStyling.css";

function Address() {
  return (
    <section id="address-container" className="address-container">
      <h3 className="text-address">Address</h3>
      <div className="address-account">
        <FontAwesomeIcon icon={faPlus} className="iconPlus"/>
        <h3>Tambah Alamat</h3>
      </div>
      <table className="table-address">
        <tr>
          <th>Full Name</th>
          <th>Detail</th>
        </tr>
        <tr>
          <td>Khidir karawita</td>
          <td>Jl. Kemana Aja Gg. Bersama No 183, Pontianak Barat, Kota Pontianak, Kalimantan Barat</td>
        </tr>
      </table>
    </section>
  );
};

export default Address;