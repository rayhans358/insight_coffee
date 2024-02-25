import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import "./orderListStyling.css";

function OrderList() {
  return (
    <section id="orderList-container" className="orderList-container">
      <h3 className="text-orderList">Pemesanan</h3>
      <table className="table-orderList">
        <div className="orderId">
          <tr>
            <th>Order ID</th>
            <th>Total</th>
            <th>Status</th>
            <th>Invoice</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>#4</td>
            <td>Rp. 100.000</td>
            <td>Waiting Payment</td>
            <td>Invoice</td>
            <td><FontAwesomeIcon icon={faArrowLeft}/></td>
          </tr>
        </div>
        <div className="detail-orderList">
          <tr>
            <th>Barang</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total Harga</th>
          </tr>
          <tr>
            <td>Coffee</td>
            <td>Rp. 100.000</td>
            <td>1</td>
            <td>Rp. 100.000</td>
          </tr>
        </div>
      </table>
    </section>
  );
};

export default OrderList;