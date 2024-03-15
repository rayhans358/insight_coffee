import React from 'react';

import "./orderListStyling.css";

function OrderList() {
  return (
    <section id="orderList-container" className="orderList-container">
      <h3 className="text-orderList">Pemesanan</h3>
      <table className="table-orderList">
        <tr>
          <th style={{width: '5%'}}>Order ID</th>
          <th>Detail</th>
          <th>Jumlah</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
        <tr>
          <td style={{width: '5%'}}>#4</td>
          <td>Fulan</td>
          <td>1</td>
          <td>Rp. 100.000</td>
          <td>Waiting Payment</td>
        </tr>
      </table>
    </section>
  );
};

export default OrderList;